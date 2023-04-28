"use client";

import {
  CheckCircleIcon,
  ExclamationIcon,
} from '@heroicons/react/solid';
import { Callout } from '@tremor/react';

type Props = {
    message: string;
    warring?: boolean;
}
export default function CalloutCard({message, warring}: Props) {
  return (
    <Callout 
    className="mt-4" 
    title = {message}
    icon = {warring ? ExclamationIcon : CheckCircleIcon}
    color = {warring ? "rose" : "teal"}
    />
  );
}
