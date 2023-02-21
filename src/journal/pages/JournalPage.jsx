import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

let drawerWidth = 280

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores reprehenderit dignissimos ratione eaque excepturi praesentium consequatur architecto illum doloremque distinctio, eligendi et officiis recusandae voluptas ex voluptatem similique porro sequi!</Typography> */}

      <NothingSelectedView drawerWidth={drawerWidth}/> 
      
      {/* <NoteView/> */}

      <IconButton
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>

    </JournalLayout>
  );
};
