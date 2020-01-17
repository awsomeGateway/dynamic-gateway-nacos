package com.dynamic.gateway.model;

import java.util.LinkedHashMap;
import lombok.Data;
import java.util.Map;

/**
 * @author slh-nightBreeze
 * 过滤器定义模型
 */

@Data
public class GatewayFilterDefinition {

    /**
     * 过滤器Name
     */
    private String name;

    /**
     * 对应的过滤器规则
     */
    private Map<String, String> args = new LinkedHashMap<>();

}
