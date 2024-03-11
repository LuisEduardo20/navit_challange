import { Container } from "@/styles/App";
import {
  LeftSideContent,
  MiddleContent,
  RightSideContent,
  FriendInfoModal,
} from "@/components";
import { useModal } from "./components/hooks/useModal";

function App() {
  const { modalVisible, handleCloseModal } = useModal();

  return (
    <Container>
      <LeftSideContent />

      <MiddleContent />

      <RightSideContent />

      <FriendInfoModal
        modalVisible={modalVisible}
        closeModal={handleCloseModal}
      />
    </Container>
  );
}

export default App;
