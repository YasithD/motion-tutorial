import { ComponentProps } from "react";

export type ParralaxContentProps = ComponentProps<"div"> & ParralaxTextProps & ImageProps;

export type ImageProps = {
    imgUrl: string;
};

export type ParralaxTextProps = {
    title: string;
    subtitle: string;
};
