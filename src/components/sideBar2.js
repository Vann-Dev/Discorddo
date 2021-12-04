export default function SideBar2() {
    return (
        <section style={{ 'backgroundColor': '#2F3136' }} className="w-56 h-screen">
            <div className=" p-2 select-none">
                <div className="grid gap-5">
                    <div style={{ 'backgroundColor': '#202225' }} className="h-8 w-auto flex items-center p-2 rounded-md cursor-pointer">
                        <p className="text-xs text-gray-400">Find or start conversation</p>
                    </div>
                    <div className="grid gap-1">
                        <div className="bg-lowGray rounded-lg h-12 flex gap-4 items-center p-2 cursor-pointer">
                            <div className="h-8 w-8">
                                <svg className="h-full w-full" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="white" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                            </div>
                            <p className="text-xl text-white font-mukta">Friends</p>
                        </div>
                        <div className="hover:bg-lowGray2 opacity-75 hover:opacity-95 rounded-lg h-12 flex gap-4 items-center p-2 cursor-pointer">
                            <div className="h-8 w-8">
                                <svg className="h-full w-full" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="white" d="M17,13.6 L17.3999992,13.6 C19.0406735,13.6 20.496781,12.8097754 21.4084757,11.5891722 L21.8198761,18.8298199 C21.913864,20.4840062 20.6490733,21.9011814 18.994887,21.9951692 C18.9382174,21.9983891 18.8814679,22 18.8247069,22 L5.1752931,22 C3.51843885,22 2.1752931,20.6568542 2.1752931,19 C2.1752931,18.943239 2.17690401,18.8864895 2.18012387,18.8298199 L2.59152425,11.5891732 C3.503219,12.8097758 4.95932613,13.6 6.6,13.6 L7,13.6 L7,15 L9,15 L9,13.6 L15,13.6 L15,15 L17,15 L17,13.6 Z M7,16 L7,18 L9,18 L9,16 L7,16 Z M15,16 L17,16 L17,18 L15,18 L15,16 Z M15,11.6 L9,11.6 L9,9 L7,9 L7,11.6 L6.6,11.6 C4.94314575,11.6 3.6,10.2568542 3.6,8.6 L3.6,5 C3.6,3.34314575 4.94314575,2 6.6,2 L17.3999992,2 C19.0568535,2 20.3999992,3.34314575 20.3999992,5 L20.3999992,8.6 C20.3999992,10.2568542 19.0568535,11.6 17.3999992,11.6 L17,11.6 L17,9 L15,9 L15,11.6 Z"></path></g></svg>                        </div>
                            <p className="text-xl text-white font-mukta">Library</p>
                        </div>
                        <div className="hover:bg-lowGray2 opacity-75 hover:opacity-95 rounded-lg h-12 flex gap-4 items-center p-2 cursor-pointer">
                            <div className="h-8 w-8">
                                <svg className="w-full h-full" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"></path></svg>
                            </div>
                            <p className="text-xl text-white font-mukta">Nitro</p>
                        </div>
                    </div>
                    <div className="flex justify-between opacity-40 hover:opacity-95 cursor-pointer ">
                        <p className="text-white font-mukta">DIRECT MESSAGES</p>
                        <svg x="0" y="0" aria-hidden="false" width="24" height="24" viewBox="0 0 18 18"><polygon fill-rule="nonzero" fill="#B9BBBE" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
                    </div>
                    <div className="grid gap-1">
                        <div className="flex items-center gap-3 group cursor-pointer rounded-md hover:bg-lowGray h-14 p-2">
                            <div className="h-10 w-10 relative">
                                <div style={{ 'borderColor': "#2F3136" }} className="bg-green-600 h-4 w-4 absolute rounded-full border-2 top-6 left-6"></div>
                                <img className="rounded-full border-2 border-black h-full w-full" src="https://cdn.discordapp.com/avatars/243728573624614912/8782eee4a9f1940caccf4f05ccacb8d7.png" alt="MaaKoo" />
                            </div>
                            <div className="grid text-white font-mukta">
                                <p className="text-md opacity-70 group-hover:opacity-95">MaaKoo</p>
                                <p className="text-xs opacity-40 group-hover:opacity-70">Im pro at Canvas</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer rounded-md hover:bg-lowGray h-14 p-2">
                            <div className="h-10 w-10 relative">
                                <div style={{ 'borderColor': "#2F3136" }} className="bg-green-600 h-4 w-4 absolute rounded-full border-2 top-6 left-6"></div>
                                <img className="rounded-full border-2 border-black h-full w-full" src="https://cdn.discordapp.com/avatars/499021389572079620/649c35a293f53aec496f844258da60ed.png" alt="KagChi" />
                            </div>
                            <div className="grid text-white font-mukta">
                                <p className="text-md opacity-70 group-hover:opacity-95">KagChi</p>
                                <p className="text-xs opacity-40 group-hover:opacity-70">Im fullstack dev :D</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer rounded-md hover:bg-lowGray h-14 p-2">
                            <div className="h-10 w-10 relative">
                                <div style={{ 'borderColor': "#2F3136" }} className="bg-green-600 h-4 w-4 absolute rounded-full border-2 top-6 left-6"></div>
                                <img className="rounded-full border-2 border-black h-full w-full" src="https://cdn.discordapp.com/avatars/435497505883422721/daf824f880a1c54535c79e3bd25d8cad.png" alt="Vann" />
                            </div>
                            <div className="grid text-white font-mukta">
                                <p className="text-md opacity-70 group-hover:opacity-95">Vann</p>
                                <p className="text-xs opacity-40 group-hover:opacity-70">{'FrontEnd dev :>'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}