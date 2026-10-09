'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { apiService } from '@/lib/api';
import { Shield } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const verifySession = async () => {
      const token = apiService.getToken();

      // No token found -> immediately redirect to login
      if (!token) {
        if (isMounted) {
          setIsAuthorized(false);
          setIsChecking(false);
          router.replace('/login');
        }
        return;
      }

      try {
        // Validate session against the backend
        await apiService.getCurrentUser();
        if (isMounted) {
          setIsAuthorized(true);
          setIsChecking(false);
        }
      } catch (err: any) {
        // Attempt to refresh token if expired
        try {
          await apiService.refreshToken();
          await apiService.getCurrentUser();
          if (isMounted) {
            setIsAuthorized(true);
            setIsChecking(false);
          }
        } catch {
          if (isMounted) {
            apiService.clearTokens();
            setIsAuthorized(false);
            setIsChecking(false);
            router.replace('/login');
          }
        }
      }
    };

    verifySession();

    return () => {
      isMounted = false;
    };
  }, [router, pathname]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-[#0e1e38]">
        <div className="flex flex-col items-center gap-4 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-2xl bg-[#0e1e38] flex items-center justify-center shadow-xl animate-pulse">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div className="text-center">
            <h2 className="text-base font-bold text-[#0e1e38] tracking-tight">Verifying Credentials</h2>
            <p className="text-xs text-slate-500 mt-1">Securing Rwanda Drive session...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
