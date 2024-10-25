import Navbar from "../Components/navbar";

export default async function About() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(5000)
    }, 5000);
  })
  return (
    <div className="justify-center font-bold text-red-700 ">
        <h1 className="font-extrabold text-center text-5xl pt-52">
          About Page
        </h1>
      </div>
  );
}

