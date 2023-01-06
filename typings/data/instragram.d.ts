export interface IPicInfo {
  height: number
  width: number
  url: string
}

export interface IUser {
  account_badges?: Array<unknown>
  fan_club_info?: {
    fan_club_id: null | string | number
    fan_club_name: null | string
    fan_consideration_page_revamp_eligiblity: null | string
    is_fan_club_gifting_eligible: null | string
    is_fan_club_referral_eligible: null | string
  }
  full_name: string
  has_anonymous_profile_picture?: boolean
  is_favorite?: boolean
  is_private: boolean
  is_unpublished?: boolean
  is_verified: boolean
  latest_reel_media?: number
  pk: string
  pk_id: string
  profile_grid_display_type?: string
  profile_pic_id: string
  profile_pic_url: string
  transparency_product_enabled?: boolean
  username: string
}

export interface ICaption {
  bit_flags: number
  comment_like_count?: number
  content_type: string
  created_at: number
  created_at_utc: number
  did_report_as_spam: boolean
  has_translation: boolean
  is_covered: boolean
  is_ranked_comment: boolean
  media_id: string
  pk: string
  private_reply_status: number
  share_enabled: boolean
  status: string
  text: string
  type: number
  user: IUser
  user_id: string
}

export interface IVideoInfo {
  id: string
  height: number
  width: number
  type: number
  url: string
}

export interface IInsItem {
  can_see_insights_as_brand: boolean
  can_view_more_preview_comments: boolean
  can_viewer_reshare: boolean
  can_viewer_save: boolean
  caption: ICaption
  caption_is_edited: boolean
  client_cache_key: string
  clips_metadata: unknown
  clips_tab_pinned_user_ids: Array<unknown>
  code: string
  comment_count: number
  comment_inform_treatment: {
    action_type: null | string | number
    should_have_inform_treatment: boolean
    text: string
    url: null | string
  }
  comment_likes_enabled: boolean
  comment_threading_enabled: boolean
  comments: Array<ICaption>
  commerce_integrity_review_decision: null | string
  commerciality_status: string
  deleted_reason: number | null
  device_timestamp: number
  facepile_top_likers: Array<{
    full_name: string
    is_private: boolean
    is_verified: boolean
    pk: string
    pk_id: string
    profile_pic_id: string
    profile_pic_url: string
    username: string
  }>
  fb_like_count: number
  fb_play_count: number
  filter_type: number
  has_audio: boolean
  has_delayed_metadata: boolean
  has_liked: boolean
  has_more_comments: boolean
  has_shared_to_fb: number
  hide_view_all_comment_entrypoint: boolean
  id: string
  image_versions2: {
    additional_candidates: {
      first_frame: IPicInfo
      igtv_first_frame: IPicInfo
      smart_frame: null | unknown
    }
    candidates: Array<IPicInfo>
  }
  inline_composer_display_condition: string
  integrity_review_decision: string
  is_artist_pick: boolean
  is_dash_eligible: number
  is_in_profile_grid: boolean
  is_organic_product_tagging_eligible: boolean
  is_paid_partnership: boolean
  is_unified_video: boolean
  is_visual_reply_commenter_notice_enabled: boolean
  like_and_view_counts_disabled: boolean
  like_count: number
  max_num_visible_preview_comments: number
  media_cropping_info: {
    square_crop: {
      crop_bottom: number
      crop_left: number
      crop_right: number
      crop_top: number
    }
  }
  media_type: number
  music_metadata: null | string
  next_max_id: string | null
  number_of_qualities: number
  organic_tracking_token: string | null
  original_height: number
  original_media_has_visual_reply_media: boolean
  original_width: number
  photo_of_you: boolean
  pk: string
  play_count: number
  preview_comments: Array<ICaption>
  product_type: string
  profile_grid_control_enabled: boolean
  sharing_friction_info: {
    bloks_app_url: null | string
    sharing_friction_payload: null | string
    should_have_sharing_friction: boolean
  }
  should_request_ads: boolean
  taken_at: number
  top_likers: Array<string>
  user: IUser
  video_codec: string
  video_dash_manifest: string
  video_duration: number
  video_subtitles_confidence: number
  video_versions: Array<IVideoInfo>
  view_count: number
}

export interface IUserInitResponse {
  auto_load_more_enabled: boolean
  items: Array<IInsItem>
  more_available: boolean
  next_max_id: string
  num_results: number
  status: string
  user: IUser
}
