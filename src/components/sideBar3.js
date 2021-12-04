export default function SideBar3() {
    return (
        <section className="bg-lowGray w-screen select-none">
            <nav className="flex p-3 items-center gap-6">
                <div className="flex gap-3">
                    <div className="h-9 w-9">
                        <svg className="h-full w-full opacity-30" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="white" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                    </div>
                    <p className="font-mukta text-white text-3xl items-center">Friends</p>
                </div>
                <div className="w-1 h-7 bg-lowGray2"></div>
                <div className="flex gap-5 text-xl font-mukta text-gray-400">
                    <p className="text-white bg-lowGray2 w-20 text-center rounded-md cursor-pointer">Online</p>
                    <p className="cursor-pointer hover:text-gray-300">All</p>
                    <p className="cursor-pointer hover:text-gray-300">Pending</p>
                    <p className="cursor-pointer hover:text-gray-300">Blocked</p>
                    <p className="bg-green-500 h-auto rounded-md w-32 text-center text-white cursor-pointer">Add Friend</p>
                </div>
            </nav>
            <div className="flex">
                <div className="p-12 h-full w-4/6">
                    <p className="text-gray-300 text-base">ONLINE — 3</p>
                    <div className="grid gap-3 mt-7">
                        <div className="hover:bg-lowGray2 rounded-md p-2 cursor-pointer">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-5">
                                    <div className="h-12 w-12 relative">
                                        <div className="bg-green-600 h-4 w-4 absolute rounded-full border-lowGray2 border-2 top-8 left-8"></div>
                                        <img className="rounded-full h-full w-full" src="https://cdn.discordapp.com/avatars/435497505883422721/daf824f880a1c54535c79e3bd25d8cad.png" alt="Vann" />
                                    </div>
                                    <div className="grid">
                                        <p className="text-white font-mukta text-xl">
                                            Vann
                                        </p>
                                        <p className="text-gray-300 font-mukta text-ld">
                                            Online
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="h-10 w-10 bg-gray-800 p-2 rounded-full">
                                        <svg className="h-full w-full text-gray-400" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"></path></svg>
                                    </div>
                                    <div className="h-10 w-10 bg-gray-800 p-2 rounded-full">
                                        <svg className="h-full w-full text-gray-400" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"></path></g></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hover:bg-lowGray2 rounded-md p-2 cursor-pointer">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-5">
                                    <div className="h-12 w-12 relative">
                                        <div className="bg-green-600 h-4 w-4 absolute rounded-full border-lowGray2 border-2 top-8 left-8"></div>
                                        <img className="rounded-full h-full w-full" src="https://cdn.discordapp.com/avatars/499021389572079620/649c35a293f53aec496f844258da60ed.png" alt="KagChi" />
                                    </div>
                                    <div className="grid">
                                        <p className="text-white font-mukta text-xl">
                                            KagChi
                                        </p>
                                        <p className="text-gray-300 font-mukta text-ld">
                                            Online
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="h-10 w-10 bg-gray-800 p-2 rounded-full">
                                        <svg className="h-full w-full text-gray-400" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"></path></svg>
                                    </div>
                                    <div className="h-10 w-10 bg-gray-800 p-2 rounded-full">
                                        <svg className="h-full w-full text-gray-400" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"></path></g></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hover:bg-lowGray2 rounded-md p-2 cursor-pointer">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-5">
                                    <div className="h-12 w-12 relative">
                                        <div className="bg-green-600 h-4 w-4 absolute rounded-full border-lowGray2 border-2 top-8 left-8"></div>
                                        <img className="rounded-full h-full w-full" src="https://cdn.discordapp.com/avatars/243728573624614912/8782eee4a9f1940caccf4f05ccacb8d7.png" alt="MaaKoo" />
                                    </div>
                                    <div className="grid">
                                        <p className="text-white font-mukta text-xl">
                                            MaaKoo
                                        </p>
                                        <p className="text-gray-300 font-mukta text-ld">
                                            Online
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="h-10 w-10 bg-gray-800 p-2 rounded-full">
                                        <svg className="h-full w-full text-gray-400" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"></path></svg>
                                    </div>
                                    <div className="h-10 w-10 bg-gray-800 p-2 rounded-full">
                                        <svg className="h-full w-full text-gray-400" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0z"></path><path fill="currentColor" d="M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"></path></g></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-lowGray2 h-screen w-2 rounded-t-md">

                </div>
                <div className="p-12 h-full w-2/6">
                    <p className="text-white font-mukta text-2xl font-semibold">Active Now</p>
                    <p className="text-white text-xl font-mukta text-center mt-7">It's quiet for now...</p>
                    <p className="text-gray-400 text-center mt-1">When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!</p>
                </div>
            </div>
        </section>
    )
}