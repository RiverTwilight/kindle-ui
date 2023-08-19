import React from "react";
export interface ISectionTitle {
    label: string;
}
declare const SectionTitle: ({ label }: ISectionTitle) => React.JSX.Element;
export default SectionTitle;
