import { useEffect, useState } from "react";
import { myGithubProfile } from "../../lib/axios";
import {
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileImg,
  ProfileInfo,
} from "./styles";
import IconArrow from "../../assets/svg/IconArrow";
import IconGithub from "../../assets/svg/IconGithub";
import IconCompany from "../../assets/svg/IconCompany";
import IconFollowers from "../../assets/svg/IconFollowers";

interface GithubProfile {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
  login: string;
  public_repos: number;
  followers: number;
}

async function fetchGithubProfile(
  username: string
): Promise<GithubProfile | null> {
  try {
    const response = await myGithubProfile.get(`${username}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar perfil do Github", error);
    return null;
  }
}

const Profile = () => {
  const [profileData, setProfileData] = useState<GithubProfile | null>(null);

  useEffect(() => {
    fetchGithubProfile("lucasshira").then((data) => {
      if (data) setProfileData(data);
    });
  }, []);

  if (!profileData) {
    return <p>Carregando...</p>;
  }

  return (
    <ProfileContainer>
      <ProfileImg src={profileData!.avatar_url} alt="Foto de perfil" />

      <ProfileInfo>
        <ProfileHeader>
          <h2>{profileData.name}</h2>
          <a href={profileData.html_url}>
            GitHub <IconArrow />
          </a>
        </ProfileHeader>

        <p>{profileData.bio}</p>

        <ProfileFooter>
          <span>
            <IconGithub />
            {profileData.login}
          </span>
          <span>
            <IconCompany />
            {profileData.public_repos} public repos
          </span>
          <span>
            <IconFollowers />
            {profileData.followers} seguidores
          </span>
        </ProfileFooter>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default Profile;
