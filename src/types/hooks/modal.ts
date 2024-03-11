export interface IModalData {
  friendData: FriendData;
  modalVisible: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleUpdateFriendData: (data: FriendData) => void;
}

export type FriendData = {
  id: string;
  url_photo: string | null;
  name: string;
  tag: string;
  gender: string;
  height: string;
  forehand: string;
  backhand: string;
  last_play: number;
  joined_at: string;
};
