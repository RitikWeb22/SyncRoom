"use client";
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import Image from 'next/image';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  handleClick: () => void;
  image?: string;
  buttonIcon?: string;
  className?: string;
  buttonText?: string;
}

const MeetingModal: React.FC<MeetingModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  handleClick,
  image,
  buttonIcon,
  className = '',
  buttonText = 'Create Meeting',
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-dark-2 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={`text-center text-2xl font-bold ${className}`}>
            {title}
          </DialogTitle>
          {description && (
            <DialogDescription className="text-center text-sky-2">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        {image && (
          <div className="flex justify-center">
            <Image src={image} width={50} height={50} alt="Modal Image" />
          </div>
        )}
        {children}
        <Button
          type="button" // Changed from "submit" to "button"
          className="bg-purple-1 hover:bg-purple-2"
          onClick={handleClick}
        >
          {buttonIcon && (
            <Image
              src={buttonIcon}
              width={20}
              height={20}
              alt="Button Icon"
              className="mr-2"
            />
          )}
          {buttonText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;