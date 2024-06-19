// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 新增对话 POST /api/aiAssistant/add */
export async function addAiAssistantUsingPost(
  body: API.AiAssistantAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/aiAssistant/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** AI 对话 POST /api/aiAssistant/chat */
export async function aiAssistantUsingPost(
  body: API.GenChatByAiRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseObject_>('/api/aiAssistant/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除对话 POST /api/aiAssistant/delete */
export async function deleteAiAssistantUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/aiAssistant/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑对话 POST /api/aiAssistant/edit */
export async function editAiAssistantUsingPost(
  body: API.AiAssistantEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/aiAssistant/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据Id获取对话 GET /api/aiAssistant/get */
export async function getAiAssistantByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAiAssistantByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiAssistant_>('/api/aiAssistant/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页获取对话 POST /api/aiAssistant/list/page */
export async function listAiAssistantByPageUsingPost(
  body: API.AiAssistantQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAiAssistant_>('/api/aiAssistant/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取我的对话 POST /api/aiAssistant/my/list/page */
export async function listMyAiAssistantByPageUsingPost(
  body: API.AiAssistantQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAiAssistant_>('/api/aiAssistant/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 管理员更新对话信息 POST /api/aiAssistant/update */
export async function updateAiAssistantUsingPost(
  body: API.AiAssistantUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/aiAssistant/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
