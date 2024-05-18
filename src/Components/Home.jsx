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
    <div className='container-fluid p-2 p-sm-3 p-md-5'>
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
                                <h1 className="fs-2">{item.Name}</h1>
                                <p className="fs-4 text-secondary">{item.Para}</p>
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



















           
    </div>

  )
}

export default Home