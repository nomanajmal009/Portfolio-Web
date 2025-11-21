"use client";

import { ConfigProvider, theme } from "antd";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { theme: nextTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  const isDark = nextTheme === "dark" || (nextTheme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#3b82f6",
          borderRadius: 8,
          fontFamily: "var(--font-geist-sans), Arial, sans-serif",
        },
        components: {
          Card: {
            borderRadius: 12,
            paddingLG: 24,
          },
          Button: {
            borderRadius: 8,
          },
          Tag: {
            borderRadius: 6,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

