
import { Sidebar } from "flowbite-react";
import { HiChartPie,HiShoppingBag,HiInbox,HiUser,HiArrowSmRight,HiTable,HiUserGroup} from "react-icons/hi";
import ApplicationLogo from "./ApplicationLogo";
import { Link,usePage} from "@inertiajs/react";
import Dropdownlinks from '../Components/Dropdownlinks'
import { useEffect,useState } from "react";
export default function Authenticated() {
    
    const{sidebarpermissions} = usePage().props
    const dropdownLinks = [
      { label: 'Link 1', to: '/link1' },
      { label: 'Link 2', to: '/link2' },
      { label: 'Link 3', to: '/link3' },
    ];
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
    //   <div className={`bg-gray-900 w-64 px-4 py-8 space-y-6 ${isMobile ? 'hidden md:block' : 'block'}`}>
    //   <div className="flex items-center justify-center mb-8">
    //     <h1 className="text-white text-2xl font-bold">My App</h1>
    //   </div>
    //   <nav>
    //     <ul>
    //       <li className="mb-4">
    //         <a href="#" className="text-gray-400 hover:text-white block">
    //           Dashboard
    //         </a>
    //       </li>
    //       <Dropdownlinks title="User Management" links={dropdownLinks} />
    //       <li className="mb-4">
    //         <a href="#" className="text-gray-400 hover:text-white block">
    //           Profile
    //         </a>
    //       </li>
    //       <li className="mb-4">
    //         <a href="#" className="text-gray-400 hover:text-white block">
    //           Settings
    //         </a>
    //       </li>
    //       <li className="mb-4">
    //         <a href="#" className="text-gray-400 hover:text-white block">
    //           Logout
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
     
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
          icon={HiUserGroup}
          label="User management"
        >
      {    sidebarpermissions.includes('permission_access') && <Sidebar.Item href={route('permissions.index')}>
            Permissions
          </Sidebar.Item>}
          {sidebarpermissions.includes('role_access') && <Sidebar.Item href={route('roles.index')}>
            Roles
          </Sidebar.Item>}

        { sidebarpermissions.includes('user_access') &&  <Sidebar.Item href={route('users.index')}>
            Users
          </Sidebar.Item>}
        </Sidebar.Collapse>

        <Sidebar.Collapse
          icon={HiShoppingBag}
          label="Product management"
        >
      {    sidebarpermissions.includes('product_category_access') && <Sidebar.Item href={route('productcategories.index')}>
            Product Category
          </Sidebar.Item>}
          {sidebarpermissions.includes('product_brand_access') && <Sidebar.Item href={route('productbrands.index')}>
            Product Brands
          </Sidebar.Item>}
          {sidebarpermissions.includes('product_brand_access') && <Sidebar.Item href={route('productvariations.index')}>
            Product Variations
          </Sidebar.Item>}
          { sidebarpermissions.includes('unit_access') &&  <Sidebar.Item href={route('units.index')}>
            Units
          </Sidebar.Item>}
        { sidebarpermissions.includes('product_access') &&  <Sidebar.Item href={route('products.index')}>
            Products
          </Sidebar.Item>}
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
        { sidebarpermissions.includes('patient_access') &&   <Sidebar.Item
          href={route('patients.index')}
          icon={HiShoppingBag}
        >
          Patients
        </Sidebar.Item>}
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
