
import { Sidebar } from "flowbite-react";
import { HiChartPie,HiShoppingBag,HiInbox,HiUser,HiArrowSmRight,HiTable} from "react-icons/hi";
import ApplicationLogo from "./ApplicationLogo";
import { Link,usePage} from "@inertiajs/react";

export default function Authenticated() {
    
    const{sidebarpermissions} = usePage().props
console.log(sidebarpermissions)
    return (
     
            <div className="w-1/5 bg-bubble-gum">
                   <div className="shrink-0 py-4 px-6 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
  <Sidebar aria-label="Sidebar with multi-level dropdown example">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item
          href="#"
          icon={HiChartPie}
        >
          Dashboard
        </Sidebar.Item>
        <Sidebar.Collapse
          icon={HiShoppingBag}
          label="User management"
        >
          <Sidebar.Item href={route('permissions.index')}>
            Permissions
          </Sidebar.Item>
          <Sidebar.Item href={route('roles.index')}>
            Roles
          </Sidebar.Item>
          <Sidebar.Item href={route('users.index')}>
            Users
          </Sidebar.Item>
        </Sidebar.Collapse>
        <Sidebar.Item
          href="#"
          icon={HiInbox}
        >
          Inbox
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiUser}
        >
          Users
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiShoppingBag}
        >
          Products
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiArrowSmRight}
        >
          Sign In
        </Sidebar.Item>
        <Sidebar.Item
          href="#"
          icon={HiTable}
        >
          Sign Up
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
</div>

    );
}
