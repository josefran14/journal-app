import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";

let drawerWidth = 280

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores reprehenderit dignissimos ratione eaque excepturi praesentium consequatur architecto illum doloremque distinctio, eligendi et officiis recusandae voluptas ex voluptatem similique porro sequi!</Typography> */}

       <NothingSelectedView drawerWidth={drawerWidth}/>
      {/* NoteView */}

    </JournalLayout>
  );
};
