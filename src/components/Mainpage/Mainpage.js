import React, { Fragment, useState, useEffect } from "react";
import "./Mainpage.css";
import Posts from "../Posts/Posts";
import axios from "axios";

const Mainpage = () => {
  // [
  //   {
  //     username: "akash_preetin",
  //     caption: "Cool post dude",
  //     imageURL:
  //       "https://cdn.august.com.au/wp-content/uploads/2015/04/Allan_Get-Web-Developer-Savvy_header.png",
  //     likes: "100",
  //     comments: [
  //       { commentBy: "india_123", comment: "cool world" },
  //       { commentBy: "dhoni7", comment: "lead it" },
  //       { commentBy: "budh_iii", comment: "keep calm" },
  //     ],
  //   },
  //   {
  //     username: "msd_007",
  //     caption: "Cool Cap",
  //     imageURL:
  //       "https://www.mindinventory.com/blog/wp-content/uploads/2021/03/frontend-development-tools.png",
  //     likes: "200",
  //     comments: [
  //       { commentBy: "india_123", comment: "cool world" },
  //       { commentBy: "dhoni7", comment: "lead it" },
  //       { commentBy: "budh_iii", comment: "keep calm" },
  //     ],
  //   },
  //   {
  //     username: "imjustin",
  //     caption: "Im cool",
  //     imageURL:
  //       "https://res.cloudinary.com/practicaldev/image/fetch/s--DRrVvb_q--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/ssqkgebqme30hf4fwmw0.png",
  //     likes: "300",
  //     comments: [
  //       { commentBy: "india_123", comment: "cool world" },
  //       { commentBy: "dhoni7", comment: "lead it" },
  //       { commentBy: "budh_iii", comment: "keep calm" },
  //     ],
  //   },
  // ]
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    debugger;
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    };
    axios
      .get(
        "https://7s24ygcgb5.execute-api.us-east-1.amazonaws.com/getPosts",
        headers
      )
      .then((res) => {
        debugger;
        if (!res.data) {
          return null;
        } else {
          setPosts(res.data);
        }
      });
  }, []);
  return (
    <Fragment>
      <div className="mainpage__container">
        <Posts posts={posts}></Posts>
      </div>
    </Fragment>
  );
};

export default Mainpage;
