export interface Agent {
  uuid:                      string;
  displayName:               string;
  description:               string;
  developerName:             string;
  characterTags:             null;
  displayIcon:               string;
  displayIconSmall:          string;
  bustPortrait:              string;
  fullPortrait:              string;
  fullPortraitV2:            string;
  killfeedPortrait:          string;
  background:                string;
  backgroundGradientColors:  string[];
  assetPath:                 string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter:       boolean;
  isAvailableForTest:        boolean;
  isBaseContent:             boolean;
  role:                      Role;
  abilities:                 Ability[];
  voiceLine:                 VoiceLine;
}

export interface Ability {
  slot:        string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface Role {
  uuid:        string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath:   string;
}

export interface VoiceLine {
  minDuration: number;
  maxDuration: number;
  mediaList:   MediaList[];
}

export interface MediaList {
  id:    number;
  wwise: string;
  wave:  string;
}
export interface ResponseAgents {
  data: Agent[],
  status: number,
}

export interface ResponseAgent {
  data: Agent,
  status: number,
}