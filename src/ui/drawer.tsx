import Link from "next/link";
import Image from "next/image";

export function Drawer() {
    return (
        <div className="drawer lg:drawer-open w-fit">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side h-full">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className=" w-full h-full flex flex-col justify-top pt-16">
                    <div className="w-full flex flex-col items-center gap-4 h-92">
                        <div className="avatar">
                            <div className="w-64 rounded-full shadow-lg">
                                <Image
                                    src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                                    alt="Profile Picture"
                                    layout="responsive"
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                        </div>
                        <div className=" w-80 flex flex-col items-center px-2">
                            <h2 className="text-4xl font-bold">
                                Gabriel Marin
                            </h2>
                            <p className="text-sm overflow-hidden text-ellipsis line-clamp-3">
                                Software Engineer @ Icaro Tech
                                <br />
                                BSc in Information Systems @ USP
                            </p>
                        </div>
                    </div>

                    {/* <ul className="menu bg-base-200 text-base-content w-80 p-4">
                        <li>
                            <Link href="/">Sidebar Item 1</Link>
                        </li>
                        <li>
                            <Link href="/">Sidebar Item 2</Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
}
