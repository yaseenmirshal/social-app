'use client'
import React from 'react'
import '/common.css'
import Link from 'next/link';



function page() {

    const handlePlusButtonClick = () => {
      const inputElement = document.getElementById('fileInput');
      if (inputElement) {
        inputElement.click();
      }
    };




  return (
    <>
    <div style={{backgroundColor:'#1A0033',width:'100%',height:'100vh'}}>
        <div className="flex justify-center float-left " style={{width:'365px',height:'100vh',backgroundColor:'#1A0033'}}>
        <div  style={{width:'365px',height:'290px',backgroundColor:'#1A0033'}}>
          <div className='ml-32' style={{backgroundImage: 'url(\'https://pyxis.nymag.com/v1/imgs/414/172/44ee5a8cc13d3735612e70d2cbeac2be6f-03-paul-walker-memory.rsquare.w400.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center', marginTop:'30px', height:'110px',width:'110px',borderRadius:'100px 100px 100px 100px '}}></div>
          <Link href={'./Profile'}>
          <h1 className='mt-4 cursor-pointer hover:underline' style={{ fontSize:'19px', color:"white",textAlign: "center"}}>Paul Walker
          <svg style={{marginTop:'-22px',marginLeft:'240px'}}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 48 48">
          <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
          </svg>
          </h1>
          </Link>
          <br/><br/>
          <div className=' flex items-center' style={{marginTop:'-20px',width:'365px',height:'30px',backgroundColor:'#1A0033'}}>
            <h2 className='ml-16 font-semibold' style={{ color:"white",textAlign: "center"}}>28</h2>
            <h2 className='ml-20 font-semibold' style={{color:"white",textAlign: "center"}}>2.2k</h2>
            <h2 className='ml-20 font-semibold' style={{color:"white",textAlign: "center"}}>789</h2>
          </div>
        
          <div className=' flex items-center'>
           
          
          <p style={{fontWeight:'200',fontSize:'15px'}} className='text-white ml-14'>Posts</p>
          <p style={{fontWeight:'200',fontSize:'15px'}} className='text-white ml-12'>Followers</p>
          <p style={{fontWeight:'200',fontSize:'15px'}} className='text-white ml-12'>Following</p>
          </div>
          <hr style={{marginTop:'25px'}} className="border-l-1 border-stone-700" />
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6 text-white mt-10 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px',color:'whitesmoke',fontWeight:'bold'}}>Feed</p>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white mt-7 ml-12 cursor-pointer ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px',color:'whitesmoke'}}>Saved</p>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mt-7 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px',color:'whitesmoke',color:'whitesmoke'}}>Messages</p>

<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mt-7 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px',color:'whitesmoke'}}>Settings</p>
<Link href={'./Profile'}>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mt-7 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px',color:'whitesmoke'}}>Profile</p>
</Link>
<Link href={'./Login'}>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mt-52 ml-12 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>
<p className='cursor-pointer' style={{marginLeft:'90px',marginTop:'-25px',color:'whitesmoke'}}>Log out</p>
</Link>

        </div>
        </div>
        
      <div style={{height:'100vh',backgroundColor:'#1A0033'}} className='overflow-scroll  float-left  w-1/2 hide-scrollbar'>
       <div className="pt-2 relative mx-auto text-slate-50">
         <img className='float-left' style={{width:'150px',marginLeft:'10px',marginTop:'20px'}} src="whitelogo.png" alt="" />
       <input
        className="bg-white bg-opacity-25 ml-2 mt-4 w-72 h-12 px-5 rounded-xl text-base focus:outline-none border-none"
        type="search"
        name="search"
        placeholder="Search"
        />
        <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <label
        htmlFor="fileInput"/>
        <button onClick={handlePlusButtonClick} className="ml-10 h-12 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
  Create new post
</button>
     </div>
     <div >
     <h1 className='text-xl font-bold text-white ml-7 mt-7'>Stories</h1>
     <div className='float-left ml-7 flex justify-center border-2 border-slate-400 border-dashed cursor-pointer' style={{ marginTop:'30px', height:'70px',width:'70px',backgroundColor:'black',borderRadius:'100px 100px 100px 100px '}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-6 h-6 text-slate-50 mt-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg></div>
     <div className='border-2  border-indigo-600 float-left ml-7' style={{marginTop:'30px', height:'70px',width:'70px',backgroundImage: 'url(\'https://static.javatpoint.com/biography/images/ronaldo6.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
     <div className='border-2  border-indigo-600 float-left ml-7' style={{marginTop:'30px', height:'70px',width:'70px',backgroundImage: 'url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SVdSomJ6EdR1Le371cnnEYtS9PcpuDh93StRqmPVEg&s\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
     <div className='border-2  border-indigo-600 float-left ml-7' style={{marginTop:'30px', height:'70px',width:'70px',backgroundImage: 'url(\'https://www.hairbond.com/wp-content/uploads/2020/02/tommy-shelby-hair.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
     <div className='border-2  border-indigo-600 float-left ml-7' style={{marginTop:'30px', height:'70px',width:'70px',backgroundImage: 'url(\'Elon.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
     <div className='border-2  border-indigo-600 float-left ml-7' style={{marginTop:'30px', height:'70px',width:'70px',backgroundImage: 'url(\'https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
     <div className='border-2  border-indigo-600 float-left ml-7' style={{marginTop:'30px', height:'70px',width:'70px',backgroundImage: 'url(\'https://static.vecteezy.com/system/resources/previews/026/284/879/non_2x/al-nassr-club-logo-symbol-saudi-arabia-football-abstract-design-illustration-with-blue-background-free-vector.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
    </div> 
    <div style={{backgroundColor:'#1A0033'}} className=' w-1/1 h-4 mt-28'>
     <p style={{fontSize:'12px'}}  className='float-left ml-8 text-slate-50'>Add Story</p>
     <p style={{fontSize:'12px'}}  className='float-left text-slate-50 ml-10'>cristiano</p>
     <p style={{fontSize:'12px'}}   className='float-left  text-slate-50 ml-14 '>dq salmaan</p>
     <p style={{fontSize:'12px'}}   className='float-left  text-slate-50 ml-9'>t.shelby</p>
     <p style={{fontSize:'12px'}}   className='float-left  text-slate-50 ml-12'>Elon musk</p>
     <p style={{fontSize:'12px'}}   className='float-left text-slate-50 ml-12'>Tony stark</p>
     <p style={{fontSize:'12px'}}  className='float-left  text-slate-50 ml-10'>alnassr</p>
      </div>
      {/* <h1 className='text-xl font-bold text-white ml-7 mt-7'>Feeds</h1> */}
      <div style={{borderRadius:'20px',width:'620px',height:'600px'}} className='bg-black ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundImage: 'url(\'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/bmw-logo-2020-present-1024x742.webp\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className='text-white ml-12'>bmwindia</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: 'url(\'https://wallpapers.com/images/high/bmw-desktop-hd-v32oehek1rjeoowc.webp\')', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >

      </div>
      <div style={{width:'550px'}} className='bg-black  h-14 ml-7 mt-2'>
      <p className='text-white text-sm'>Experience unparalleled luxury and performance with BMW, where innovation meets elegance on every journey.</p>
      </div>
      <div className='mt-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 text-slate-50 mr-1 ml-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
      <h1 className='float-left text-slate-50 mt-1 mr-6'>1.6k</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 text-slate-50 mr-1 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<h1 style={{paddingTop:'5px'}} className='float-left text-slate-50 mr-96'>454</h1>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8 text-slate-50 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

</div>
      </div>
      
      <div style={{borderRadius:'20px',width:'620px',height:'600px'}} className='bg-black ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundImage: 'url(\'https://cdn.icon-icons.com/icons2/1834/PNG/512/iconfinderlandroverlogo4142330-115968_115913.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className='text-white ml-12'>Land rover</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: 'url(\'https://www.hdcarwallpapers.com/walls/land_rover_defender_110_country_pack_first_edition_2020_4k_2-HD.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >

      </div>
      <div style={{width:'550px'}} className='bg-black  h-14 ml-7 mt-2'>
      <p className='text-white text-sm'>Embark on a visual journey with breathtaking travel photography capturing the essence of destinations around the globe</p>
      </div>
      <div className='mt-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 text-slate-50 mr-1 ml-6 cursor-pointer ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
      <h1 className='float-left text-slate-50 mt-1 mr-6'>1.6k</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 text-slate-50 mr-1 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<h1 style={{paddingTop:'5px'}} className='float-left text-slate-50 mr-96'>454</h1>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8 text-slate-50 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

</div>
      </div>

      
      <div style={{borderRadius:'20px',width:'620px',height:'600px'}} className='bg-black ml-12 mt-8'>
      <div className='float-left ml-4' style={{marginTop:'15px', height:'45px',width:'45px',backgroundColor:'white',borderRadius:'100px 100px 100px 100px '}}></div>
      <p  style={{padding:'25px',fontSize:'15px'}} className='text-white ml-12'>saudiarabia</p>
      <img style={{marginLeft:'565px',marginTop:'-50px',width:'20px',height:'20px',opacity:'0.8'}} src="dotss.png" alt="" />
      <div style={{borderRadius:'20px',width:'570px',height:'400px', backgroundImage: 'url(\'https://i.pinimg.com/736x/eb/8e/fe/eb8efecf8e90df1d429451b1afae0c13.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'40px',marginLeft:'25px'}} >

      </div>
      <div style={{width:'550px'}} className='bg-black  h-14 ml-7 mt-2'>
      <p className='text-white text-sm'>Embark on a visual journey with breathtaking travel photography capturing the essence of destinations around the globe</p>
      </div>
      <div className='mt-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 text-slate-50 mr-1 ml-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
      <h1 className='float-left text-slate-50 mt-1 mr-6'>1.6k</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="float-left w-8 h-8 text-slate-50 mr-1 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>
<h1 style={{paddingTop:'5px'}} className='float-left text-slate-50 mr-96'>454</h1>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8 text-slate-50 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

</div>
      </div>
     </div>

     <div style={{height:'100vh',width:'345px',backgroundColor:'#1A0033',borderLeft:'1px solid #333'}} className='float-left '>
     {/* <img style={{width:'150px',marginLeft:'90px',marginTop:'20px'}} src="whitelogo.png" alt="" /> */}
     <h1 className='text-xl font-bold text-white ml-7 mt-7'>Requests</h1>
     <div style={{width:'345px',height:'290px',backgroundColor:'#1A0033',marginTop:'20px',borderBottom:'1px solid #333'}}>
      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'nazz.jpeg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className=' text-white ml-2 text-[15px]'><b>nn.azal</b> </h3> <p className='text-gray-400 text-[13px]'> wants to add you to friends</p> <button className='text-blue-500 mr-2'>Accept</button> <button className='text-gray-300 hover:text-red-500'>Decline</button></div><br></br>

      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'badsha.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className=' text-white ml-2 text-[15px]'><b>mhd.badsha</b> </h3> <p className='text-gray-400 text-[13px]'> wants to add you to friends</p> <button className='text-blue-500 mr-2 '>Accept</button> <button className='text-gray-300 hover:text-red-500'>Decline</button></div><br/>

      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'ali.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className=' text-white ml-2 text-[15px]'><b>alishan_gafoor</b> </h3> <p className='text-gray-400 text-[13px]'> wants to add you to friends</p> <button className='text-blue-500 mr-2'>Accept</button> <button className='text-gray-300 hover:text-red-500'>Decline</button></div>




     <div className='flex justify-center w-[345px] h-9 mt-3 bg-[#1A0033]'>
      <p className='mt-5 text-sm text-blue-500'>View All Requests</p>
     </div>
     </div>
     <h1 className='text-xl font-bold text-white ml-7 mt-8 '>Notifications</h1>
     <div style={{backgroundColor:'#1A0033'}} className="w-[345px] h-[280px] mt-[20px] mb-5 ">

     <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'vin.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className=' text-white ml-2 text-[15px]'><b>vindiesel</b> </h3> <p className='text-white text-sm'> Liked your post</p> </div><br/>

      <div className='w-[345px] h-14 text-[15px]'> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'https://odishabytes.com/wp-content/uploads/2023/01/zain-malik-1200x900.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className=' text-white ml-2'><b>zain_malik</b> </h3> <p className='text-white text-sm'> Comments in your post</p> </div><br/>

      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'abu.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className=' text-white ml-2 text-[15px]'><b>abu_salim</b> </h3> <p className='text-white text-sm'>Mentioned you in their story</p> </div>





     <div className='flex justify-center w-[345px] h-9  bg-#1A0033 '>
      <p className='mt-4 text-sm text-blue-500'>View All Notifications</p>
     </div>
     </div>

     <div style={{width:'345px',height:'40px',backgroundColor:'#1A0033',marginTop:'-20px'}}>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4 '>About </p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Privacy and Terms</p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Help Centre</p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Business Services</p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Accessibility</p> <br/> <br/>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>© 2024 SOCIAFY FROM YM INNOVATION</p>
     </div>
     </div>
     </div>
    </>
  )
}

export default page