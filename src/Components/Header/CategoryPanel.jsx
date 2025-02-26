import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const CategoryPanel = (props) => {


    // const [open, setOpen] = React.useState(false);

    // const toggleDrawer = (newOpen) => () => {
    //     setOpen(newOpen);
    // };



    // useEffect(()=>{
    //     alert(props.isOpenCatPanel)
    // })
    const siderLabel = ['Inbox', 'Starred', 'Send email', 'Drafts']

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={props.openCategoryPanel(false)}>
            <List>
                {siderLabel.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <div>
                {/* <Button onClick={toggleDrawer(true)} className='gap-2 !text-black'>
                    <CgMenuLeftAlt className='text-[18px] font-bold' />
                    Shop By Categories
                    <IoIosArrowDown className='text-[18px] font-bold' />

                </Button> */}
                <Drawer open={
                    props.isOpenCatPanel} onClose={props.openCategoryPanel(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </>
    )
}

export default CategoryPanel