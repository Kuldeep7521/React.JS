import React from "react";
import { useEffect } from "react";

function Blog ()  {
  const Effect = () => {
    useEffect(() => {
      document.title = "Blog"
    }, []);
}
Effect();
  return (
    <>
    <div>
      <p className="font-semibold text-center text-2xl">New Updates</p>
      <br/>
      <div className="grid grid-cols-3 gap-10 mx-20 max-md:grid-cols-2 max-sm:grid-cols-1 mx-10 ">
        
        <div>
          <img src="/Blog/bl-2.png" alt="" className="rounded-xl" />
          <p>26 Mar 2023</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            consectetur quasi porro dignissimos obcaecati voluptate dolorum
            libero, autem molestias facere exercitationem magnam ea nemo iusto!
          </p>
          <p className="pt-2">Countinu Reading..</p>
        </div>
        <div>
          <img src="/Blog/bl-1.png" alt="" className="rounded-xl" />
          <p>02 Mar 2023</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            consectetur quasi porro dignissimos obcaecati voluptate dolorum
            libero, autem molestias facere exercitationem magnam ea nemo iusto!
          </p>
          <p className="pt-2">Countinu Reading..</p>
        </div>
        <div>
          <img src="/Blog/bl-3.png" alt="" className="rounded-xl" />
          <p>07 Mar 2023</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            consectetur quasi porro dignissimos obcaecati voluptate dolorum
            libero, autem molestias facere exercitationem magnam ea nemo iusto!
          </p>
          <p className="pt-2">Countinu Reading..</p>
        </div>
        <div>
          <img
            src="/Blog/pexels-pixabay-325876.jpg"
            alt=""
            className="rounded-xl"
          />
           <p>15 Mar 2023</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            consectetur quasi porro dignissimos obcaecati voluptate dolorum
            libero, autem molestias facere exercitationem magnam ea nemo iusto!
          </p>
          <p className="pt-2">Countinu Reading..</p>
        </div>
        <div>
          <img
            src="/Blog/pexels-ylanite-koppens-934069.jpg"
            alt=""
            className="rounded-xl"
          />
           <p>20 Mar 2023</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            consectetur quasi porro dignissimos obcaecati voluptate dolorum
            libero, autem molestias facere exercitationem magnam ea nemo iusto!
          </p>
          <p className="pt-2">Countinu Reading..</p>
        </div>
        <div>
          <img
            src="/Blog/pexels-the-th-179909.jpg"
            alt=""
            className="rounded-xl"
          />
           <p>26 Mar 2023</p>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            consectetur quasi porro dignissimos obcaecati voluptate dolorum
            libero, autem molestias facere exercitationem magnam ea nemo iusto!
          </p>
          <p className="pt-2">Countinu Reading..</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
