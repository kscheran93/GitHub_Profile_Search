import React,{useState} from 'react'
import DisplayTable from './DisplayTable';

function Profile() {
    //React Hook
    const [data, setData]=useState({});
    const [username,setUsername]= useState('');
    const [repositories, setRepositories] =useState([]); 

    //event Handlers
const submitHandler= async e =>{
   e.preventDefault();
  try{
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    console.log(profileJson);
 
    const repositories = await fetch(profileJson.repos_url);
    const repositoriesJson = await repositories.json();
    console.log(repositoriesJson)
 
    if(profileJson) {
        setData(profileJson);
        setRepositories(repositoriesJson)
    } 
  } catch(err){
      console.log(err);
  }
  
}
    //User Interface
  return (
    <>
    <div className='betterview'>
        <img src='https://miro.medium.com/max/1280/1*75jvBleoQfAZJc3sgTSPQA.jpeg'></img>
        <div className='ui search'>
            <div className='ui icon input'>
              <i class="search icon"></i>
            <input className='prompt'placeholder='Search username'type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <button class="ui github button" type='submit' onClick={submitHandler}>
            <i class="github icon"></i>Search GitHub profile</button>
        </div>
    </div>
    <div style={{marginTop:'10px'}}>
    <DisplayTable data={data} repositories={repositories}/>
    </div>
    </>
  )
}
export default Profile;