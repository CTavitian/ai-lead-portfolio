/**
 * Single place for Overlord to fill public contact details.
 * Leave empty until confirmed. Empty strings are not rendered on the site.
 */
export type ContactConfig = {
  github: string;
  githubUser: string;
  /** TODO Overlord: confirm LinkedIn URL */
  linkedin: string;
  email: string;
};

export const contact: ContactConfig = {
  github: "https://github.com/CTavitian",
  githubUser: "CTavitian",
  linkedin: "",
  email: "kaspar@venode.ai",
};
