"use client";
import { ComponentType, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import useUserStore from "@/store/UserAuth";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const { user } = useUserStore();

    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("accessToken");
      if (!token) {
        router.replace("/login");
      }
      // else {
      //   if (!user) {
      //     router.replace("/login");
      //   }
      // }
    }, [user, router]);

    return <WrappedComponent {...props} />;
  };

  ComponentWithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return ComponentWithAuth;
};

export default withAuth;
