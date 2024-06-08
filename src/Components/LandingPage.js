import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import user from "../media/users.jpg";
import post from "../media/posts.jpg";
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return ( 
    <div className="flex flex-wrap relative top-40 left-80 gap-8 w-3/4 font-extrabold">
        <Link to="/user">
      <Card className="card" sx={{ minHeight: "280px", width: 320 }}>
        <CardCover>
          <img src={user} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            User API Calling
          </Typography>
          <Typography textColor="neutral.300">Json PLaceholder</Typography>
        </CardContent>
      </Card>
      </Link>
      <Link to="/post">
      <Card className="card" sx={{ minHeight: "280px", width: 320 }}>
        <CardCover>
          <img src={post} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            Posts API Calling
          </Typography>
          <Typography textColor="neutral.300">Json PLaceholder</Typography>
        </CardContent>
      </Card>
      </Link>
    </div>
  );
}
