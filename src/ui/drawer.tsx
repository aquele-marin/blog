import Link from "next/link";

export function Drawer() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href="/">Sidebar Item 1</Link>
          </li>
          <li>
            <Link href="/">Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
