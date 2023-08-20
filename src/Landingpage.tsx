import { Link } from "react-router-dom";
const LandingPage = () => {
  const ImagesUsed = {
    mongo:
      "https://images.unsplash.com/photo-1658204238967-3a81a063d162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1162&q=80",
    gitImage:
      "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linuxImage:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  };
  return (
    <div className="min-h-screen bg-base-200 p-5">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-5">
          Welcome to Code Commands
        </h1>
        <p className="text-lg text-gray-300">
          Easy to use and simple tool. Copy snippets, paste it in your code, and
          search the commands.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {/* Card 1 - Git Commands */}
        <Link to="git-commands">
          <div className=" bg-white shadow rounded-md">
            <img
              src={ImagesUsed.gitImage}
              alt="Git Commands"
              className="w-full object-cover h-60 mx-auto mb-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">
                Git Commands
              </h2>
              <p className="text-gray-600">
                Discover and explore essential Git commands and concepts.
              </p>
              <button className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
                Explore Git Commands{" "}
              </button>
            </div>
          </div>
        </Link>

        {/* Card 2 - MongoDB Commands */}
        <div className=" bg-white shadow rounded-md">
          <Link to="mongodb-commands">
            <img
              src={ImagesUsed.mongo}
              alt="MongoDB Commands"
              className="w-full object-cover h-60 mx-auto mb-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">
                MongoDB Commands
              </h2>
              <p className="text-gray-600">
                Learn MongoDB commands for managing databases and collections.
              </p>
              <button className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
                Explore MongoDB Commands
              </button>
            </div>
          </Link>
        </div>

        {/* Card 3 - Linux Commands */}
        <Link to="linux-commands">
          <div className=" bg-white shadow rounded-md">
            <img
              src={ImagesUsed.linuxImage}
              alt="Linux Commands"
              className="w-full object-cover h-60 mx-auto mb-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-black">
                Linux Commands
              </h2>
              <p className="text-gray-600">
                Get familiar with essential Linux commands and operations.
              </p>
              <button className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
                Explore Linux Commands{" "}
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
