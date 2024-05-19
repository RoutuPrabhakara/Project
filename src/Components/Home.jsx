import React from 'react'
import './Style.css'

function Home() {
    const Data=[{
        Name:"Friendly Interface",
        Para:"ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum"
            
},
{
    Name:"Queck access",
    Para:"ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum"
},
{
    Name:"Extensions & Addons",
    Para:"ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum"
},
{
    Name:"File Manager",
    Para:"ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum"
},
{
    Name:"Convert Media Files",
    Para:"ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum"
},
{
    Name:"Storage & Backup",
    Para:"ligula risus ociis auctor and tempus feugiat impedit felis cursus auctor augue mauris blandit ipsum"
},

]
  return (
    <div className='container-fluid p-3  p-md-5'>
            <div className="row align-items-center  hero">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="mb-4">
                        <h1 className="display-2 fw-bold">Keep your files <br /> safe with Martex</h1>
                        <p className="fs-3">Your content is secure and stays private anywhere, anytime</p>
                        <div className="d-flex gap-3">
                            <button className='btn btn-danger btn-lg'>Get Started</button>
                            <button className='btn btn-outline-danger btn-lg'>See how it works</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="card">
                        <img src="https://dsathemes.com/html/martex_1.1/files/images/dashboard-04.png" alt="" className="w-100" />
                    </div>
                </div>
                
            </div>
           <h1 className="text-center fs-1 fw-bold mt-5">The Complete Solutions</h1>
           <p className="text-center fs-3 text-secondary mb-5">Ligula risus auctor tempus magna feugiat lacinia.</p>
            <div className='container-fluid mt-4'>
                <div className="row">
                    {
                       Data.map((item, index)=>(
                        <div className="col-md-6">
                            <div className="card mb-4 p-3 shadow border-0">
                                <h1 className="fs-3">{item.Name}</h1>
                                <p className="fs-6 text-secondary">{item.Para}</p>
                            </div>
                        </div>
                       ))
                    }
                </div>

            </div>
            <div className="container p-3 ">
            <div className="row Advanced align-items-center p-3 rounded-4">
                <div className="col-md-5">
                    <h1 className="fs-4 text-secondary">ADVANCED SECURITY</h1> 
                    <h1 className="display-4 fw-bold">Secure access <br /> to all your files</h1> 
                    <p className="fs-5 text-secondary">Risus auctor ligula tempus feugiat and dolor lacinia purus in congue lipsum purus sapien quaerat vitae primis tellus viverra vitae</p>
                    <a href="" className="text-primary fw-bold nav-link fs-4">The smarter way to work <i class="bi bi-chevron-right"></i></a>   
                </div>
                <div className="col-md-7">
                    <img src="https://dsathemes.com/html/martex_1.1/files/images/dashboard-05.png" alt="" className="w-100 mt-4" />
                </div>
            </div>
            </div>
            <div className="contariner">
                <div className="align-items-center p-3">
                    <div className="col md-5 text-center">
                        <h1>Efficiently create, manage  <br />and publish your content</h1>
                        <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="align-items-center p-3">
                    <div className="row">
                        <div className="col-md-5 mb-4">
                            <img src="https://talkwisely.io/images/img-11.png" alt="" className="w-100" />
                        </div>
                        <div className="col-md-7 ml-3">
                            <h1 className="fs-3 mt-3">Easy, 2-click integration</h1>
                            <p className="fs-5 mt-3">Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit</p>
                            <h1 className="fs-3 mt-3">Full access to all features</h1>
                            <p className="fs-5 mt-3">Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus an ipsum vitae suscipit purus</p>
                            <p className="fs-5 mt-3">Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus</p>
                            <p className="fs-5 mt-2">Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="align-items-center p-3">
                    <div className="row">
                        <div className="col-md-4">
                         <div className="p-3 gap-3 d-flex align-items-center">
                         <h1 className='display-3 fw-bold'>81K</h1>
                        <span className='fs-5 ml-1'>Porta justo integer  and velna vitae auctor</span>
                         </div>
                        </div>
                         <div className="col-md-4">
                        <div className="p-3 gap-3 d-flex align-items-center">
                         <h1 className='display-3 fw-bold'>76%</h1>
                        <span className='fs-5 ml-1'>Ligula magna suscipit vitae and rutrum</span>
                         </div>
                        </div>   
                         <div className="col-md-4">
                         <div className="p-3 gap-3 d-flex align-items-center">
                         <h1 className='display-3 fw-bold'>4.29</h1>
                        <span className='fs-5  ml-1'>Sagittis congue augue egestas an egestas</span>
                        
                         </div>
                        </div>   
                    </div>
                </div>
            </div>
                    <div className="container">
                        <div className="text-center fs-3 mt-5">
                            <h1>Everything in One Place</h1>
                            <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://dsathemes.com/html/martex_1.1/files/images/blog/post-4-img.jpg" alt="" className="w-100 mt-3 gap-5" />
                                <h1 className="text-center fs-5 mt-3">Friendly Interface</h1>
                                <p>Luctus egestas augue undo ultrice aliquam in lacus congue dapibus</p>


                            </div>
                            <div className="col-md-4 mt-3 gap-5">
                                <img src="https://dsathemes.com/html/martex_1.1/files/images/f_08.png" alt="" className="w-100 mt-3 gap-5" />
                                <h1 className="text-center fs-5 mt-3">Flexible Editor</h1>
                                <p>Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat</p>


                            </div>
                            <div className="col-md-4 mt-3  gap-5">
                                <img src="https://dsathemes.com/html/martex_1.1/files/images/f_03.png" alt="" className="w-100 gap-3" />
                                <h1 className="text-center fs-5 mt-3">Data Protection</h1>
                                <p>Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus</p>


                            </div>
                            
                        </div>
                    </div>
                    <div className="container  ">
                       <div className="row">
                       <div className="col-md-6 mt-5 ">
                            <img src="https://dsathemes.com/html/martex_1.1/files/images/img-05.png" alt="" className='w-100' />
                        </div>
                        <div className="col-md-6 mt-5">
                            <h1 className="fs-6 color-dark-black">PRODUCTIVITY FOCUSED</h1>
                            <h1 className="fs-3">Work smarter with  <br />powerful features</h1>
                            <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit</p>
                            <p>Nemo ipsam egestas volute turpis egestas ipsum and purus sapien ultrice an aliquam quaerat ipsum augue turpis sapien cursus congue magna purus quaerat at ligula purus egestas magna cursus undo varius purus magnis sapien quaerat</p>
                            <a href="" className="fs-3 w-bold">All-in-one platform <i class="bi bi-chevron-right"></i></a>

                        </div>
                       </div>
                    </div>
                    <div className="container">
                        <div className="row black">
                            <div className="col-md-7 mt-5">
                                <h1 className="fs-5">Everything in one place</h1>
                                <p>Sodales tempor sapien quaerat congue eget ipsum laoreet turpis neque auctor vitae eros dolor luctus placerat magna ligula cursus and purus pretium</p>
                                <h1 className="fs-3">Editing tools and exports </h1>
                                <p>Tempor sapien volute turpis ipsum laoreet purus and sapien dolor diam ultrice ipsum aliquam undo congue dolor cursus tempor sapien quaerat</p>
                                <p className="mt-5">Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien a turpis ultrice auctor ipsum</p>
                                                                               
                            </div>
                            <div className="col-md-5 mt-5">
                            <img src="https://dsathemes.com/html/martex_1.1/files/images/img-12.png" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <img src="https://dsathemes.com/html/martex_1.1/files/images/img-10.png" alt="" className="w-100" />
                            </div>
                            <div className="col-md-6 mt-5">
                                <h1 className="fs-4">Password Protection</h1>
                                <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat</p>
                                <h1 className="fs-4">Multi-Device Syncing</h1>
                                <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat</p>
                                <h1 className="fs-4">Effortless File Sharing</h1>
                                <p>Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat</p>

                            </div>
                        </div>
                    </div>
                   


















           
    </div>

  )
}

export default Home