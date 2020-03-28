import {
  Close,
  AngleLeft,
  PlayIcon,
  AngleRight,
  Hamburger,
  LeftArrow,
  LikeButton,
  WatchLater,
  ShareIcon,
  ChevronUp,
  ChevronDown,
  Search,
  PlayButton,
  Cast,
  Like,
  Episode,
  Info,
  Clear,
  GoBack,
  More,
  Favorite,
  Premium,
  PremiumIcon,
  Logout,
  ProfileIcon,
  PremiumFill,
  AngleLeftIcon,
  AngleRightIcon,
  SearchMini,
  Success,
  Error,
  Selected,
  SelectedWatchLater,
  Mail,
  Phone,
  BrandLogo,
  PremiumMemberIcon,
  PremiumProfileIcon
} from "./icons";

export enum Icons {
  Close = "Close",
  AngleLeft = "AngleLeft",
  AngleRight = "AngleRight",
  PlayIcon = "PlayIcon",
  Hamburger = "Hamburger",
  LeftArrow = "LeftArrow",
  LikeButton = "LikeButton",
  ShareIcon = "ShareIcon",
  ChevronUp = "ChevronUp",
  ChevronDown = "ChevronDown",
  PlayButton = "PlayButton",
  Search = "Search",
  Cast = "Cast",
  Like = "Like",
  WatchLater = "WatchLater",
  Episode = "Episode",
  Info = "Info",
  Clear = "Clear",
  GoBack = "GoBack",
  More = "More",
  Favorite = "Favorite",
  Premium = "Premium",
  PremiumIcon = "PremiumIcon",
  Logout = "Logout",
  ProfileIcon = "ProfileIcon",
  PremiumFill = "PremiumFill",
  AngleLeftIcon = "AngleLeftIcon",
  AngleRightIcon = "AngleRightIcon",
  SearchMini = "SearchMini",
  Success = "Success",
  Error = "Error",
  Selected = "Selected",
  SelectedWatchLater = "SelectedWatchLater",
  Mail = "Mail",
  Phone = "Phone",
  BrandLogo = "BrandLogo",
  PremiumMemberIcon = "PremiummemberIcon",
  PremiumProfileIcon = "PremiumProfileIcon"
}
export type Props = {
  className?: string;
  color?: string;
};

export const Icon = ({
  type,
  className,
  color
}: {
  className?: string;
  color?: string;
  type: Icons;
}) => {
  switch (type) {
    case Icons.Close: {
      return <Close className={className} color={color} />;
    }
    case Icons.AngleLeft: {
      return <AngleLeft className={className} color={color} />;
    }
    case Icons.PlayIcon: {
      return <PlayIcon className={className} color={color} />;
    }
    case Icons.AngleRight: {
      return <AngleRight className={className} color={color} />;
    }
    case Icons.Hamburger: {
      return <Hamburger className={className} color={color} />;
    }
    case Icons.LeftArrow: {
      return <LeftArrow className={className} color={color} />;
    }
    case Icons.ChevronUp: {
      return <ChevronUp className={className} color={color} />;
    }
    case Icons.ChevronDown: {
      return <ChevronDown className={className} color={color} />;
    }
    case Icons.PlayButton: {
      return <PlayButton className={className} color={color} />;
    }
    case Icons.LikeButton: {
      return <LikeButton className={className} color={color} />;
    }
    case Icons.ShareIcon: {
      return <ShareIcon className={className} color={color} />;
    }
    case Icons.Search: {
      return <Search className={className} color={color} />;
    }
    case Icons.Clear: {
      return <Clear className={className} color={color} />;
    }
    case Icons.GoBack: {
      return <GoBack className={className} color={color} />;
    }
    case Icons.Cast: {
      return <Cast className={className} color={color} />;
    }
    case Icons.Like: {
      return <Like className={className} />;
    }
    case Icons.Favorite: {
      return <Favorite className={className} />;
    }
    case Icons.WatchLater: {
      return <WatchLater className={className} />;
    }
    case Icons.Episode: {
      return <Episode className={className} />;
    }
    case Icons.Info: {
      return <Info className={className} />;
    }
    case Icons.More: {
      return <More className={className} color={color} />;
    }
    case Icons.Premium: {
      return <Premium className={className} color={color} />;
    }
    case Icons.PremiumIcon: {
      return <PremiumIcon className={className} color={color} />;
    }
    case Icons.Logout: {
      return <Logout className={className} color={color} />;
    }
    case Icons.ProfileIcon: {
      return <ProfileIcon className={className} color={color} />;
    }
    case Icons.PremiumFill: {
      return <PremiumFill className={className} color={color} />;
    }
    case Icons.AngleLeftIcon: {
      return <AngleLeftIcon className={className} color={color} />;
    }
    case Icons.AngleRightIcon: {
      return <AngleRightIcon className={className} color={color} />;
    }
    case Icons.Mail: {
      return <Mail className={className} color={color} />;
    }
    case Icons.SearchMini: {
      return <SearchMini className={className} color={color} />;
    }
    case Icons.Success: {
      return <Success />;
    }
    case Icons.Error: {
      return <Error />;
    }
    case Icons.Selected: {
      return <Selected className={className} color={color} />;
    }
    case Icons.SelectedWatchLater: {
      return <SelectedWatchLater className={className} />;
    }
    case Icons.Phone: {
      return <Phone className={className} />;
    }
    case Icons.BrandLogo: {
      return <BrandLogo className={className} />;
    }
    case Icons.PremiumMemberIcon: {
      return <PremiumMemberIcon className={className} />;
    }
    case Icons.PremiumProfileIcon: {
      return <PremiumProfileIcon className={className} />;
    }
  }
};
