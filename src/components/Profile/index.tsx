import { useEffect, useState } from "react";
import { myGithubProfile } from "../../lib/axios";
import {
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileImg,
  ProfileInfo,
} from "./styles";

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

console.log(fetchGithubProfile("lucasshira").then((data) => console.log(data)));

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
    <div>
      <ProfileContainer>
        <ProfileImg src={profileData!.avatar_url} alt="Foto de perfil" />

        <ProfileInfo>
          <ProfileHeader>
            <h2>{profileData.name}</h2>
            <a href={profileData.html_url}>GitHub</a>
          </ProfileHeader>

          <p>{profileData.bio}</p>

          <ProfileFooter>
            <span>{profileData.login}</span>
            <span>{profileData.public_repos}</span>
            <span>{profileData.followers}</span>
          </ProfileFooter>
        </ProfileInfo>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
