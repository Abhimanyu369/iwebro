const BuildTeam = () => {
  return (
    <section className="container mx-auto py-24 px-10">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="">
          <div className="flex justify-end">
            <h2 className="inline text-4xl relative">
              Let's Build <span className="text-[#0e8ac8]">Your Team</span>
              <span className="bg-[#0e8ac8] h-1 w-1/2 absolute -bottom-2 left-0"></span>
            </h2>
          </div>
          <p className="mt-6 text-gray-900 text-right text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            nesciunt facere at itaque odit, veritatis, eveniet adipisci
            voluptatibus quos consequatur minima, tempore modi sit praesentium
            ullam. Fugiat tenetur aliquam illum.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BuildTeam;
