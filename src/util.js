export const playAudio = async (isPLaying, audioRef) => {
  if (isPLaying) {
    await audioRef.current.play();
    audioRef.current.play();
  }
};
