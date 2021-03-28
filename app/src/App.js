import React, { useState } from 'react'
import {Button, Grid, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Axios from 'axios';
import Animation from '../src/Animation'


//import icons
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//Styling
const useStyles= makeStyles((themes)=>({

  skygit:{
    color:"#0366d6",
    fontSize:"40px",
    paddingTop:"20px"
  },

  search:{
    textAlign:"center",
    width:"100%",
  },
  searchBar:{
    width:"50%",
    margin:"auto",
    [themes.breakpoints.down('xs')]: {
      width:"80%"
    },
  },

  Button:{
    backgroundColor:"#0366d6",
    margin:"30px",
    color:"white",
    width:"100px",
    '&:hover' :{
      backgroundColor:"#ccd9ff",
      color:"black"
    },
    [themes.breakpoints.up('md')]:{
      marginBottom:"90%",
    }
  },

  propicGrid:{
    textAlign:"center",
    [themes.breakpoints.down('xs')]: {
      textAlign:"center"
    },
  },
  pic:{
    margin:"auto",
    width:"20%",
    borderRadius:"100%",
    marginTop:"50px",
    [themes.breakpoints.down('xs')]: {
      width:"50%"
    },
  },
  topic:{
    fontSize:"30px",
    color:"#0366d6"
  },

  info:{
    paddingTop:"50px",
    marginLeft:"20px",
  },
  text:{
    fontSize:"20px",
    color:"black",
    paddingTop:"20px",
    paddingBottom:"20px"
  },
  datas:{
    backgroundColor:"#f0f0f5",
    borderRadius:"20px"
  },
  statgrid:{
    textAlign:"center"
  },
  stats:{
    width:"90%",
    marginTop:"30px",
    margin:"auto"
  },
  footer:{
    backgroundColor:"white",
    [themes.breakpoints.down('xs')]:{
      height:"100px",
      backgroundColor:"#0366d6",
    }
  },
  deignedby:{
    marginTop:"100px",
    marginLeft:"20px",
    color:"#0366d6",
    fontWeight:"bold",
    marginBottom:"20px",
    [themes.breakpoints.down('xs')]:{
      marginTop:"50px",
      color:"white",
      marginLeft:"10px",
    }
  }
}))


function App() {

  let link="https://api.github.com/users/"
  let url = "";

  //styles
  const classes =useStyles();

  //dataLoad
  const [dataload, setDataLoad]= useState(false);
  
  //Input
  const [username, setUserName]= useState(undefined);

  //data
  const [pic, setPic] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [uname, setUname] =useState(undefined);
  const [type, setType] = useState(undefined);
  const [company, setCompany] =useState(undefined);
  const [blog, setBlog] =useState (undefined);
  const [location, setLocation] =useState(undefined);
  const [email, setEmail] =useState(undefined);
  const [hire, setHire] =useState(undefined);
  const [bio, setBio] =useState(undefined);
  const [twitter, setTwitter]=useState(undefined)
  const [repo, setRepo] =useState(undefined);
  const [followers, setFollowers] =useState (undefined);
  const [following, setFollowing]= useState(undefined);
  const [created, setCreated]=useState(undefined);
  const [updated, setUpdated] =useState(undefined);

  //let link1 = "https://github-readme-stats.vercel.app/api?username=";
  //let link11= "&theme=react&show_icons=true";


  function Read(val){
    setUserName(val.target.value)
  }

  function Request(){
    console.log(username);
    url = link +username;
    console.log(url);
    Axios.get(url).then((response)=>{
      setPic(response.data.avatar_url);
      setName(response.data.name);
      setUname(response.data.login);

      setBio(response.data.bio);
      setCompany(response.data.company);
      setLocation(response.data.location);
      setHire(response.data.hireable);

      setEmail(response.data.email);
      setBlog(response.data.blog);
      setTwitter(response.data.twitter_username);

      setType(response.data.type);
      setRepo(response.data.public_repos);
      setFollowers(response.data.followers);
      setFollowing(response.data.following);
      setCreated(response.data.created_at);
      setUpdated(response.data.updated_at);

    })
    setDataLoad(true)
  }



  return (
    <div>
      <Grid container >

        <Grid item xs={12} md={4} className={classes.search}>
          <h1 className={classes.skygit}>Sky-Git</h1>
          <TextField id="outlined-basic" label="GitHub User Name" variant="outlined" onChange={Read} className={classes.searchBar}/><br></br>
          <Button onClick={Request} className={classes.Button}>Search</Button>
        </Grid>



        <Grid item xs={12} md={8}>
          {
            dataload
            
            ?

                 <div>
                    <Grid container className={classes.datas}>
                      <Grid item xs={12} md={12} className={classes.propicGrid}>
                        <img src={pic} className={classes.pic} alt="pic"></img>
                        <h2 className={classes.name}>{name}</h2>
                        <Typography>{uname}</Typography>
                      </Grid>

                      <Grid item xs={12} md={5} className={classes.statgrid}>
                        <img  src={"https://github-readme-stats.vercel.app/api?username="+uname +"&theme=react&show_icons=true"} className={classes.stats} alt="stat"></img>
                      </Grid>
                      <Grid item xs={12} md={5} className={classes.statgrid}>
                        <img  src={"https://github-readme-stats.vercel.app/api/top-langs/?username="+uname +"&theme=react&layout=compact"} className={classes.stats}  alt ="stat"></img>
                      </Grid>

                      <Grid item xs={12} md={5} className={classes.info}>
                        <h3 className={classes.topic}><AccountCircleIcon></AccountCircleIcon> Profile</h3><hr></hr>
                        <Typography className={classes.text}>• Account Type : {type}</Typography>
                        <Typography className={classes.text}>• No. Repos : {repo}</Typography>
                        <Typography className={classes.text}>• No Followers : {followers}</Typography>
                        <Typography className={classes.text}>• No Following : {following}</Typography>
                        <Typography className={classes.text}>• Created : {created}</Typography>
                        <Typography className={classes.text}>• Last Update : {updated}</Typography>
                      </Grid>

                      <Grid item xs={12} md={5} className={classes.info}>
                        <h3 className={classes.topic}><HomeWorkIcon></HomeWorkIcon> Working</h3><hr></hr>
                        <Typography className={classes.text}>• Bio : {bio}</Typography>
                        <Typography className={classes.text}>• Company : {company}</Typography>
                        <Typography className={classes.text}>• Location : {location}</Typography>
                        <Typography className={classes.text}>• Hire : {hire}</Typography>
                      </Grid>

                      <Grid item xs={12} md={12} className={classes.info}>
                        <h3 className={classes.topic}><MailIcon></MailIcon> Contact</h3><hr></hr>
                        <Typography className={classes.text}>• Email : {email}</Typography>
                        <Typography className={classes.text}>• Blog : <a href={blog}>{blog}</a></Typography>
                        <Typography className={classes.text}>• twitter : {twitter}</Typography>
                      </Grid>

                    </Grid>
                 </div>
            
            :

                 <div>
                   <Grid container>
                     <Grid item md={3}></Grid>
                     <Grid item xs={12} md={6}>
                       <Animation></Animation>
                     </Grid>
                     <Grid item md={3}></Grid>
                   </Grid>
                 </div>
          }
        </Grid>
        <Grid item xs={12} md={12} className={classes.footer}>
          <Typography className={classes.deignedby}>• Designed and developed by Akash Ekanayaka</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
