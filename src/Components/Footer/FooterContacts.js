import classes from "./FooterContacts.module.css";
import {
  FaDiscord,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const email = "example@gmail.org";

const contactIcons = [
  {
    icon: FaDiscord,
    name: "discord",
  },
  {
    icon: FaLinkedinIn,
    name: "discord",
  },
  {
    icon: FaFacebookF,
    name: "discord",
  },
  {
    icon: FaInstagram,
    name: "discord",
  },
];

const FooterContacts = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>Company</h1>
      </div>
      <div className={classes.list}>
        <p> {email}</p>
      </div>
      <div className={classes.contactBox}>
        {
            contactIcons.map((icon)=>{
                return <div className={classes.iconBox}>
                    {<icon.icon/>}
                </div>
            })
        }
      </div>
    </div>
  );
};

export default FooterContacts;
