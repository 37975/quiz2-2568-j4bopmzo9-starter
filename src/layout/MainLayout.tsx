import { Outlet } from "react-router-dom";
import { AppShell, AppShellFooter } from "@mantine/core";
import HeaderComponent from "../components/Header";
import { useDisclosure } from "@mantine/hooks";
import Footer from "../components/Footer";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShellFooter>
        <Footer userName={"Teejutha Konsombat"} studentId={"670610708"} course={"CPE-261207"} year={"2025"}/>
      </AppShellFooter>
    </AppShell>
  );
}
