import Image from "next/image";
import picture from './mypic.png';
import { Horse, Heart, Cube } from "@phosphor-icons/react";

export default function Home() {
  return (
   <>
    <Navbar/>

    <Homepage/>

    <Profile/>

    <MySkills/>

    <Project/>

    <div className="flex justify-center items-center flex-wrap bg-[#6482AD] min-h-screen ">

      <form className="border-2 p-9 backdrop-blur-xl bg-white/30">
      <div className="w-full text-center">
        <h1 className="text-5xl">Contact Me</h1>
        <p className="">thissurya31@gmail.com</p>
      </div>
        <div className="flex mt-20">
          <input className="w-3/6 bg-transparent border-b-2 placeholder-white mr-2 text-white focus:outline-none" type="text" name="name" placeholder="Name" />
          <input className="w-3/6 bg-transparent border-b-2 placeholder-white  text-white focus:outline-none" type="email" name="email" placeholder="Email Address" />
        </div>
        {/* <textarea className="block w-full mt-5 p-3 bg-transparent border-b-2 placeholder-white" placeholder="message"></textarea> */}
        <textarea class="border-b-2 text-white placeholder-white bg-transparent mt-5 w-full focus:border-b-2 focus:outline-none h-40" placeholder="Message" ></textarea>
        <button className="w-full bg-blue-500 p-2 mt-4 rounded">Send</button>
      </form>
    </div>

    <div className="bg-[#7FA1C3] flex p-10 flex-col md:flex-row   justify-between">
      <h1 className="text-xl">&copy;CopyRight By Surya Ahmad Afandi</h1>

      <div className="flex md:mt-0 mt-10 flex-wrap justify-between md:w-[40rem]">
        <a className="mr-5" href="#">@thissurya123</a>
        <a className="mr-5" href="#">@uyahasibuan.123@gmail.com</a>
        <a className="mr-5" href="#">@thissurya31@gmail.com</a>
      </div>
    </div>
   </>
  );
}

function Navbar(){
  return(
    <div className="flex w-full md:justify-center justify-end  bg-[#7FA1C3] px-2 py-5">
      <ul className="flex text-xl md:flex hidden h-7">
        <li className="transition-all ease-in-out mx-5 hover:cursor-pointer hover:text-[#F5EDED] hover:border-b-2 px-5">Home</li>
        <li className="transition-all ease-in-out mx-5 hover:cursor-pointer hover:text-[#F5EDED] hover:border-b-2 px-5">About</li>
        <li className="transition-all ease-in-out mx-5 hover:cursor-pointer hover:text-[#F5EDED] hover:border-b-2 px-5">Project</li>
        <li className="transition-all ease-in-out mx-5 hover:cursor-pointer hover:text-[#F5EDED] hover:border-b-2 px-5">Contact</li>
      </ul>
      <p className="md:hidden block">Menu</p>
    </div>
  )
}

function Profile(){
  return(
    <div className="bg-[#7FA1C3] md:flex-row  flex items-center justify-center min-h-screen">

    <div className="flex flex-col md:w-3/6">

      <div className="bg-gray-300 m-5 p-5 rounded-xl">
        <h1 className="font-bold text-5xl">Profile</h1>
        <p className="ml-5 mt-5 text-xl">Hello! My name is Surya Ahmad Afandi, and I am currently pursuing a Bachelor's degree in Digital Business at ITBHAS Bukittinggi. I have a strong passion for exploring new technologies and continuously expanding my knowledge in this dynamic field.</p>
      </div>

      <div className="bg-gray-300 m-5 p-5 rounded-xl">
        <h1 className="font-bold text-5xl">Education</h1>
        <p className="ml-5 mt-5 text-xl">Hello! My name is Surya Ahmad Afandi, and I am currently pursuing a Bachelor's degree in Digital Business at ITBHAS Bukittinggi. I have a strong passion for exploring new technologies and continuously expanding my knowledge in this dynamic field.</p>
      </div>

      <div className="bg-gray-300 m-5 p-5 rounded-xl">
        <h1 className="font-bold text-5xl">Experience</h1>
        <p className="ml-5 mt-5 text-xl">Hello! My name is Surya Ahmad Afandi, and I am currently pursuing a Bachelor's degree in Digital Business at ITBHAS Bukittinggi. I have a strong passion for exploring new technologies and continuously expanding my knowledge in this dynamic field.</p>
      </div>
    </div>
    </div>
  )
}

function Project(){
  return(

    <div className="bg-[#7FA1C3] flex min-h-screen justify-center items-center">
      
      <div className="flex flex-wrap md:gap-5 gap-1 md:w-5/6 justify-center">
        <h1 className="w-full text-center font-bold text-5xl text-white mb-5">My Project</h1>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
        <div className="bg-red-900 md:w-96 w-48 h-40 md:h-60"></div>
      </div>

      
      {/* <div className="flex">

        <div className="flex flex-col">
          <div className="w-80 h-40 bg-gray-900 m-5"></div>
          <div className="w-80 h-60 bg-gray-900 m-5"></div>
          <div className="w-80 h-20 bg-gray-900 m-5"></div>
        </div>

        <div className="flex flex-col">
          <div className="w-80 h-60 bg-gray-900 m-5"></div>
          <div className="w-80 h-40 bg-gray-900 m-5"></div>
          <div className="w-80 h-20 bg-gray-900 m-5"></div>
        </div>

        <div className="flex flex-col">
          <div className="w-80 h-40 bg-gray-900 m-5"></div>
          <div className="w-80 h-60 bg-gray-900 m-5"></div>
          <div className="w-80 h-20 bg-gray-900 m-5"></div>
        </div>

      </div>



      <div className="p-5 bg-[#E2DAD6] m-1 h-screen"> 
       <h1 className="text-white min-h-5/6 font-bold text-5xl mb-5">Project</h1>
       <p className="ml-5 mt-10 text-xl">Selamat datang di [Nama E-commerce Anda], platform e-commerce yang didesain untuk memudahkan pengalaman berbelanja Anda. Kami menawarkan berbagai produk berkualitas dengan harga yang kompetitif, serta layanan pelanggan yang cepat dan ramah.

Misi kami adalah untuk memberikan solusi belanja online yang mudah, aman, dan nyaman. Dengan beragam pilihan produk dari berbagai kategori, Anda dapat menemukan apa pun yang Anda butuhkan hanya dalam beberapa klik.

Kami juga menyediakan sistem pembayaran yang aman dan berbagai metode pengiriman yang dapat dipilih sesuai kebutuhan Anda, sehingga pengalaman berbelanja menjadi lebih menyenangkan.</p>
      </div> */}



    </div>
  )
}


function MySkills(){
  return(
    <div className="bg-[#6482AD] flex justify-center rounded items-center h-screen md:p-5">
      <div className="md:w-4/6 w-full backdrop-blur-xl bg-white/30 p-5 rounded">


    <h1 className="text-white font-bold text-5xl mb-5 text-center">Skills</h1>

    <div className="flex items-center mb-5 text-white">
      <div className="rounded-full w-20 h-20 bg-red-900 mr-5"></div>
      <div className="rounded-xl w-96 py-5 text-center bg-blue-900">60%</div>
    </div>

    <div className="flex items-center mb-5 text-white">
      <div className="rounded-full w-20 h-20 bg-red-900 mr-5"></div>
      <div className="rounded-xl w-4/5 py-5 text-center bg-blue-900"> 80%</div>
    </div>

    <div className="flex items-center mb-5 text-white">
      <div className="rounded-full w-20 h-20 bg-red-900 mr-5"></div>
      <div className="rounded-xl w-4/5 py-5 text-center bg-blue-900"> 80%</div>
    </div>

    <div className="flex items-center mb-5 text-white">
      <div className="rounded-full w-20 h-20 bg-red-900 mr-5"></div>
      <div className="rounded-xl w-96 py-5 text-center bg-blue-900">60%</div>
    </div>

    <div className="flex items-center mb-5 text-white">
      <div className="rounded-full w-20 h-20 bg-red-900 mr-5"></div>
      <div className="rounded-xl w-5/6 py-5 text-center bg-blue-900"> 90%</div>
    </div>
      </div>

  </div>
  )
}

function Homepage(){
  return(
    <div className="md:flex w-full items-center justify-center bg-[#6482AD] relative ">
    

    
          <Image className="md:w-[30rem] w-[20rem] z-50 relative" src={picture} alt="my Picture"/> 
          
        <div className="absolute md:top-20 top-40 md:right-40 right-2 z-0">
          <p className="text-shadow-lg md:text-[10rem] text-[5rem] bg-blue-200 px-10 text-white right font-bold">SURYA</p>
          <p className="text-shadow-lg md:text-[10rem] text-[5rem] bg-[#7FA1C3] px-10 text-white right font-bold">AHMAD</p>
          <p className="text-shadow-lg md:text-[10rem] text-[5rem] bg-[#7FA1C3] px-10 text-white right font-bold">AFANDI</p>

        </div>

    <div className="md:bg-transparent bg-blue-200 p-5 relative md:order-first">
      <p className="text-white">Hello</p><hr className="mb-10"/>
      <h1 className="
      text-5xl font-bold">This is <a className="text-blue-800 underline">Surya</a></h1>
      <p className="mt-5 ml-5  text-xl">Im Software Engineering, Data Analist and Digital Business</p>
      <button className="text-white p-5 mt-10 bg-black rounded-md">Donwload CV</button>
    </div>
  </div>
  );
}