/** Public contact details. Empty strings are not rendered on the site. */
export type ContactConfig = {
  github: string;
  githubUser: string;
  linkedin: string;
  email: string;
};

export const contact: ContactConfig = {
  github: "https://github.com/CTavitian",
  githubUser: "CTavitian",
  linkedin: "",
  email: "kaspar@venode.ai",
};
