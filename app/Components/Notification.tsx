'use client'


type NotificationProps = {
  isWhite: boolean;
}

const Notification: React.FC<NotificationProps> = ({ isWhite }: NotificationProps) => {
  
  return (                                                                                                                                                        
    <>
    <div style={{height:'100vh',width:'355px',backgroundColor:isWhite ? '#1A0033' : 'white' ,color:isWhite ? 'white' : 'black',borderLeft:'1px solid #333'}} className='float-left '>
     {/* <img style={{width:'150px',marginLeft:'90px',marginTop:'20px'}} src="whitelogo.png" alt="" /> */}
     <h1 className='text-xl font-bold  ml-7 mt-7'>Requests</h1>
     <div style={{width:'345px',height:'290px',backgroundColor:isWhite ? '#1A0033' : 'white' ,color:isWhite ? 'white' : 'black',marginTop:'20px',borderBottom:'1px solid #333'}}>
      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'nazz.jpeg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className='  ml-2 text-[15px]'><b>nn.azal</b> </h3> <p className='text-gray-400 text-[13px]'> wants to add you to friends</p> <button className='text-blue-500 mr-2'>Accept</button> <button className='text-gray-300 hover:text-red-500'>Decline</button></div><br></br>

      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'badsha.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className='  ml-2 text-[15px]'><b>mhd.badsha</b> </h3> <p className='text-gray-400 text-[13px]'> wants to add you to friends</p> <button className='text-blue-500 mr-2 '>Accept</button> <button className='text-gray-300 hover:text-red-500'>Decline</button></div><br/>

      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'ali.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className='  ml-2 text-[15px]'><b>alishan_gafoor</b> </h3> <p className='text-gray-400 text-[13px]'> wants to add you to friends</p> <button className='text-blue-500 mr-2'>Accept</button> <button className='text-gray-300 hover:text-red-500'>Decline</button></div>

     <div className='flex justify-center w-[345px] h-9 mt-3 '>
      <p className='mt-5 text-sm text-blue-500'>View All Requests</p>
     </div>
     </div>
     <h1 className='text-xl font-bold  ml-7 mt-8 '>Notifications</h1>
     <div style={{backgroundColor:isWhite ? '#1A0033' : 'white' ,color:isWhite ? 'white' : 'black'}} className="w-[345px] h-[280px] mt-[20px] mb-5 ">

     <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'vin.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className='  ml-2 text-[15px]'><b>vindiesel</b> </h3> <p className=' text-sm'> Liked your post</p> </div><br/>

      <div className='w-[345px] h-14 text-[15px]'> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'https://odishabytes.com/wp-content/uploads/2023/01/zain-malik-1200x900.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className='  ml-2'><b>zain_malik</b> </h3> <p className=' text-sm'> Comments in your post</p> </div><br/>

      <div className='w-[345px] h-14 '> <div className='float-left  ml-4 mr-2' style={{marginTop:'0px', height:'50px',width:'50px',backgroundImage: 'url(\'abu.png\')', backgroundSize: 'cover', backgroundPosition: 'center',borderRadius:'100px 100px 100px 100px '}}></div>
      <h3 className='  ml-2 text-[15px]'><b>abu_salim</b> </h3> <p className=' text-sm'>Mentioned you in their story</p> </div>





     <div className='flex justify-center w-[345px] h-9  bg-#1A0033 '>
      <p className='mt-4 text-sm text-blue-500'>View All Notifications</p>
     </div>
     </div>

     <div style={{width:'345px',height:'40px',backgroundColor:isWhite ? '#1A0033' : 'white' ,color:isWhite ? 'white' : 'black',marginTop:'-20px'}}>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4 '>About </p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Privacy and Terms</p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Help Centre</p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Business Services</p>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>Accessibility</p> <br/> <br/>
      <p style={{fontSize:'13px'}} className='float-left text-gray-500 ml-4'>© 2024 SOCIAFY FROM YM INNOVATION</p>
     </div>
     </div>
    
    
    
    </>
  )
}


export default Notification