export const scrollToBottom = () => {
  window?.scrollTo({
    top: document?.documentElement.scrollHeight + 200,
    behavior: 'smooth',
  });
};
