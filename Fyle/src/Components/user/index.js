import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, User, HeaderCard, Repos,RepoCard } from "./styled";

const Index = ({ userName }) => {
  console.log(userName);
  const [allUser, setAllUser] = useState([]);
  const [userDetail, setUserDetail] = useState({
    name: "",
    avatar: "",
    bio: "",
    location: "",
    repo_url: "",
  });
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUser = () => {
      axios
        .get(`https://api.github.com/users/${userName}`)
        .then((res) => {
          console.log(res);
          setUserDetail({
            name: res.data.name,
            location: res.data.location,
            bio: res.data.bio,
            avatar: res.data.avatar_url,
            repo_url: res.data.html_url,
          });
        })
        .catch((err) => console.log(err));
    };
    const getRepos = () => {
      axios
        .get(`https://api.github.com/users/${userName}/repos`)
        .then((res) => {
          console.log(res);
          setUserData(res.data);
        })
        .catch((err) => console.log(err));
    };
    getUser();
    getRepos();
  }, [userName]);

  return (
    <User>
      <HeaderCard>
        <Image>
          <img src={userDetail.avatar} alt="avatar" />
        </Image>
        <div>
          {console.log("name", userDetail.name)}
          <h3>{userDetail.name}</h3>
          <div>{userDetail.bio}</div>
          <div>{userDetail.location}</div>
          <div>
            <a href={userDetail.repo_url}>{userDetail.repo_url}</a>
          </div>
        </div>
      </HeaderCard>
      <Repos>
        {userData.map((repo) => {
          console.log(repo);
          return <RepoCard>

            {repo.name}
            </RepoCard>;
        })}
      </Repos>
    </User>
  );
};

export default Index;
