"use client";

import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";

const actions = [
  {
    icon: <ArrowUpwardIcon />,
    name: "Intro",
    href: "#intro",
    tooltipTitle: "Go to top",
  },
  {
    icon: <RocketLaunchIcon />,
    name: "Mission",
    href: "#mission",
    tooltipTitle: "Go to mission section",
  },
  {
    icon: <YouTubeIcon />,
    name: "Youtube",
    href: "#youtube",
    tooltipTitle: "Go to youtube section",
  },
  {
    icon: <ArrowDownwardIcon />,
    name: "Footer",
    href: "#footer",
    tooltipTitle: "Go to bottom",
  },
];

export default function GoTo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<UnfoldMoreIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.tooltipTitle}
            icon={action.icon}
            tooltipTitle={action.tooltipTitle}
            component={Link}
            href={action.href}
          />
        ))}
      </SpeedDial>
    </>
  );
}
