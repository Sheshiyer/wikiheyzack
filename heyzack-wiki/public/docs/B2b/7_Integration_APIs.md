# 7. Integration & APIs

## 7.1. Third-party Integrations

The HeyZack B2B Building Management Solution is designed with extensive integration capabilities to connect with a wide range of external systems and services. These integrations extend the platform's functionality, enable seamless data exchange, and create a comprehensive ecosystem for building management.

### Integration Strategy

The integration strategy follows a structured approach to ensure consistent, secure, and maintainable connections with external systems:

```mermaid
graph TD
    A[Integration Strategy] --> B[Integration Patterns]
    A --> C[Integration Layers]
    A --> D[Integration Governance]
    A --> E[Integration Security]
    
    B --> B1[API-Based Integration]
    B --> B2[Event-Driven Integration]
    B --> B3[File-Based Integration]
    B --> B4[Database Integration]
    B --> B5[UI Integration]
    
    C --> C1[Device Layer]
    C --> C2[System Layer]
    C --> C3[Enterprise Layer]
    C --> C4[External Services Layer]
    
    D --> D1[Integration Catalog]
    D --> D2[Integration Standards]
    D --> D3[Integration Testing]
    D --> D4[Integration Monitoring]
    
    E --> E1[Authentication]
    E --> E2[Authorization]
    E --> E3[Data Protection]
    E --> E4[Audit & Compliance]
```

### Building Systems Integrations

The solution integrates with various building systems to provide comprehensive management capabilities:

#### Building Automation Systems (BAS)

- **Purpose**: Connect with central building control systems
- **Key Integrations**:
  - Schneider Electric EcoStruxure Building
  - Siemens Desigo CC
  - Johnson Controls OpenBlue
  - Honeywell Enterprise Buildings Integrator (EBI)
  - Equans BMS
- **Integration Methods**:
  - BACnet/IP protocol integration
  - OPC UA connectivity
  - Vendor-specific APIs
  - Custom data connectors
- **Data Exchange**:
  - System status and alarms
  - Setpoint control
  - Schedule management
  - Trend data collection
  - Configuration synchronization

#### HVAC Systems

- **Purpose**: Monitor and control heating, ventilation, and air conditioning
- **Key Integrations**:
  - Carrier i-Vu
  - Trane Tracer SC
  - Daikin Intelligent Equipment
  - Ciat Control System
  - Lennox Commercial Controls
- **Integration Methods**:
  - BACnet MS/TP and BACnet/IP
  - Modbus RTU and Modbus TCP
  - LonWorks
  - Proprietary protocols with gateways
- **Data Exchange**:
  - Temperature and humidity readings
  - Equipment status and alarms
  - Setpoint control
  - Schedule management
  - Energy consumption data

#### Lighting Control Systems

- **Purpose**: Manage and optimize lighting throughout buildings
- **Key Integrations**:
  - Philips Hue
  - Lutron Quantum
  - Legrand Wattstopper
  - Osram ENCELIUM
  - Signify Interact
- **Integration Methods**:
  - DALI protocol
  - KNX
  - Zigbee
  - REST APIs
  - Gateway devices
- **Data Exchange**:
  - Lighting status
  - Dimming control
  - Scene activation
  - Scheduling
  - Energy usage data

#### Access Control and Security Systems

- **Purpose**: Integrate with physical security and access management
- **Key Integrations**:
  - Lenel OnGuard
  - SALTO Systems
  - Genetec Security Center
  - Bosch Access Control
  - Assa Abloy Aperio
- **Integration Methods**:
  - OSDP protocol
  - Wiegand interface
  - REST APIs
  - ONVIF for video
  - Custom connectors
- **Data Exchange**:
  - Access events and logs
  - Credential management
  - Alarm monitoring
  - Video feeds
  - Visitor management

#### Energy Management Systems

- **Purpose**: Monitor and optimize energy usage
- **Key Integrations**:
  - Schneider Electric Power Monitoring Expert
  - Siemens Desigo CC Energy Manager
  - Engie Energy Management
  - EDF Energy Management
  - GridPoint Energy Manager
- **Integration Methods**:
  - Modbus TCP
  - IEC 61850
  - REST APIs
  - MQTT
  - Custom connectors
- **Data Exchange**:
  - Energy consumption data
  - Demand response signals
  - Peak demand management
  - Energy cost data
  - Carbon emissions data

### Enterprise System Integrations

The solution integrates with enterprise business systems to provide a comprehensive management platform:

#### Enterprise Resource Planning (ERP)

- **Purpose**: Connect building operations with enterprise resource management
- **Key Integrations**:
  - SAP
  - Oracle ERP
  - Microsoft Dynamics
  - Sage
  - Odoo
- **Integration Methods**:
  - REST APIs
  - SOAP Web Services
  - OData
  - Batch file exchange
  - Database integration
- **Data Exchange**:
  - Asset information
  - Cost center data
  - Procurement processes
  - Financial data
  - Organizational structure

#### Computerized Maintenance Management Systems (CMMS)

- **Purpose**: Coordinate maintenance activities and asset management
- **Key Integrations**:
  - IBM Maximo
  - SAP Plant Maintenance
  - eMaint
  - Maintenance Connection
  - CARL Source
- **Integration Methods**:
  - REST APIs
  - SOAP Web Services
  - Webhook notifications
  - File-based integration
  - Database integration
- **Data Exchange**:
  - Work order management
  - Asset information
  - Maintenance scheduling
  - Spare parts inventory
  - Maintenance history

#### Facility Management Systems

- **Purpose**: Integrate with comprehensive facility management platforms
- **Key Integrations**:
  - Archibus
  - FM:Systems
  - Planon
  - MRI Software
  - Spacewell
- **Integration Methods**:
  - REST APIs
  - SOAP Web Services
  - Database integration
  - File exchange
  - Custom connectors
- **Data Exchange**:
  - Space management
  - Move management
  - Lease information
  - Service requests
  - Occupancy data

#### Human Resources Systems

- **Purpose**: Synchronize personnel data for access control and space management
- **Key Integrations**:
  - Workday
  - SAP SuccessFactors
  - Oracle HCM
  - Talentsoft
  - ADP
- **Integration Methods**:
  - REST APIs
  - SCIM protocol
  - LDAP/Active Directory
  - File-based synchronization
  - Database integration
- **Data Exchange**:
  - Employee information
  - Organizational structure
  - Access privileges
  - Onboarding/offboarding workflows
  - Work location assignments

#### Customer Relationship Management (CRM)

- **Purpose**: Connect building operations with tenant and customer management
- **Key Integrations**:
  - Salesforce
  - Microsoft Dynamics CRM
  - HubSpot
  - Zoho CRM
  - SAP Customer Experience
- **Integration Methods**:
  - REST APIs
  - SOAP Web Services
  - Webhook notifications
  - Custom connectors
- **Data Exchange**:
  - Tenant information
  - Service requests
  - Communication history
  - Contract information
  - Satisfaction metrics

### External Service Integrations

The solution integrates with external services to enhance functionality and provide additional data:

#### Weather Services

- **Purpose**: Incorporate weather data for predictive control and optimization
- **Key Integrations**:
  - Météo-France
  - OpenWeatherMap
  - AccuWeather
  - Weather Underground
  - Visual Crossing
- **Integration Methods**:
  - REST APIs
  - Data feeds
  - FTP downloads
- **Data Exchange**:
  - Current weather conditions
  - Weather forecasts
  - Historical weather data
  - Severe weather alerts
  - Climate data

#### Energy Market Services

- **Purpose**: Access energy market data for cost optimization
- **Key Integrations**:
  - EPEX SPOT (European Power Exchange)
  - RTE (Réseau de Transport d'Électricité)
  - Enedis
  - EDF Energy Market Data
  - Nord Pool
- **Integration Methods**:
  - REST APIs
  - SOAP Web Services
  - Data feeds
  - File downloads
- **Data Exchange**:
  - Energy prices
  - Demand response events
  - Grid status information
  - Capacity market data
  - Renewable energy certificates

#### Geographic Information Systems (GIS)

- **Purpose**: Incorporate location-based data and mapping
- **Key Integrations**:
  - ESRI ArcGIS
  - Mapbox
  - OpenStreetMap
  - Google Maps Platform
  - HERE Technologies
- **Integration Methods**:
  - REST APIs
  - JavaScript libraries
  - GeoJSON data exchange
  - WMS/WFS services
- **Data Exchange**:
  - Map visualization
  - Geocoding
  - Routing
  - Spatial analysis
  - Location-based services

#### Sustainability and Carbon Reporting

- **Purpose**: Support environmental reporting and sustainability initiatives
- **Key Integrations**:
  - CDP (Carbon Disclosure Project)
  - ADEME Base Carbone
  - GHG Protocol tools
  - Ecovadis
  - Schneider Resource Advisor
- **Integration Methods**:
  - REST APIs
  - File-based data exchange
  - Custom connectors
- **Data Exchange**:
  - Carbon emissions data
  - Sustainability metrics
  - Compliance reporting
  - Certification data
  - Environmental performance indicators

#### Smart City Platforms

- **Purpose**: Connect with urban infrastructure and services
- **Key Integrations**:
  - Cisco Kinetic for Cities
  - Microsoft CityNext
  - Siemens City Performance Tool
  - IBM Intelligent Operations Center
  - Nokia Impact
- **Integration Methods**:
  - REST APIs
  - MQTT
  - FIWARE
  - Custom connectors
- **Data Exchange**:
  - Urban mobility data
  - Public transportation information
  - Air quality data
  - Public safety alerts
  - City service information

### IoT Platform Integrations

The solution integrates with IoT platforms to manage and process data from connected devices, with Tuya IoT Platform serving as the primary integration platform. The Tuya integration provides comprehensive capabilities for device management, control, and automation:

#### Tuya IoT Platform Core Features

- **Cloud Development Platform**:
  * Global Cloud Infrastructure: Distributed cloud services for reliable device connectivity
  * API Gateway: RESTful APIs for device management and control
  * WebSocket Support: Real-time device state updates
  * Development SDKs: Comprehensive SDK support for multiple languages
  * Custom Functions: Cloud-based business logic implementation
  * Data Storage: Secure device and user data management

- **Device Connectivity**:
  * Multi-Protocol Support: Wi-Fi, Bluetooth, Zigbee, Matter
  * Gateway Integration: Edge processing and local control
  * Device Discovery: Automated device detection and registration
  * Firmware Management: OTA updates and version control
  * Device Groups: Logical grouping and batch control
  * Scene Automation: Complex multi-device automation rules

- **Security Framework**:
  * Device Authentication: Secure device identity verification
  * Data Encryption: End-to-end encryption for device communication
  * Access Control: Fine-grained permission management
  * Audit Logging: Comprehensive security event tracking
  * Compliance: Industry standard security certifications
  * Vulnerability Management: Regular security assessments

- **Development Tools**:
  * IoT Studio: Visual development environment
  * Device Simulator: Testing without physical hardware
  * Debug Console: Real-time monitoring and troubleshooting
  * Log Management: Comprehensive logging and analysis
  * Version Control: Management of firmware and software versions
  * Documentation: Extensive API and SDK documentation

#### TUYA IoT Platform Integration

- **Overview**: 
  - Centralized platform for smart device management and control
  - Primary integration for the HeyZack Building Management Solution
  - Enables unified control of diverse smart devices across manufacturers
  - Provides bridge functionality to incorporate third-party devices

- **Key Capabilities**:
  - **Device Management**: Centralized registration, configuration, and monitoring
  - **Cross-Brand Integration**: Bridge technology to incorporate non-TUYA devices
  - **Protocol Support**: Wi-Fi, Zigbee, Bluetooth, Z-Wave, and proprietary protocols
  - **Real-Time Control**: Low-latency device command and control
  - **Scene Automation**: Complex multi-device automation rules
  - **Data Analytics**: Device usage patterns and optimization insights
  - **Mini-App Development**: React-based mini-applications within TUYA ecosystem

- **Technical Implementation**:
  - **GO-Based Backend**: High-performance, scalable backend services
  - **API Integration**: Comprehensive REST API for device control and data access
  - **SDK Support**: Native SDKs for multiple platforms (iOS, Android, Web)
  - **Cloud-to-Cloud Integration**: Direct API integration with third-party platforms
  - **Edge Computing**: Local processing capabilities for reduced latency
  - **Security**: End-to-end encryption, device authentication, and access control

- **Integration Architecture**:
  ```mermaid
  graph TD
      A[HeyZack BMS] --> B[TUYA IoT Core]
      B --> C[TUYA-Compatible Devices]
      B --> D[TUYA Bridge]
      D --> E[Third-Party Devices]
      B --> F[TUYA Cloud Services]
      F --> G[Data Analytics]
      F --> H[User Management]
      B --> I[React Mini-Apps]
      I --> J[Mobile Applications]
  ```

#### Cloud IoT Platforms

- **Purpose**: Connect with cloud-based IoT management platforms
- **Key Integrations**:
  - **TUYA IoT Core API (primary integration)**:
    - Comprehensive cloud platform for smart device management
    - Unified device control across multiple manufacturers
    - Multi-protocol support (Wi-Fi, Zigbee, Bluetooth, etc.)
    - Extensive device ecosystem with 400,000+ SKUs
    - Cross-brand device compatibility through TUYA bridge technology
    - GO-based backend implementation for high performance
    - Support for React mini-apps development on TUYA's Android/iOS platforms
  - AWS IoT Core
  - Microsoft Azure IoT
  - Google Cloud IoT
  - IBM Watson IoT
  - Siemens MindSphere
- **Integration Methods**:
  - MQTT
  - AMQP
  - REST APIs
  - WebSockets
  - Custom connectors
- **Data Exchange**:
  - Device telemetry
  - Device management
  - Command and control
  - Device provisioning
  - Edge analytics

#### Edge Computing Platforms

- **Purpose**: Integrate with local processing platforms for IoT data
- **Key Integrations**:
  - AWS Greengrass
  - Azure IoT Edge
  - Google Edge TPU
  - NVIDIA Jetson
  - Dell Edge Gateway
- **Integration Methods**:
  - MQTT
  - OPC UA
  - REST APIs
  - Local network protocols
  - Custom connectors
- **Data Exchange**:
  - Local data processing
  - Edge analytics
  - Local control logic
  - Data filtering and aggregation
  - Offline operation

#### IoT Device Management

- **Purpose**: Manage the lifecycle of connected devices
- **Key Integrations**:
  - ThingsBoard
  - Particle
  - Bosch IoT Suite
  - Cisco IoT Field Network Director
  - PTC ThingWorx
- **Integration Methods**:
  - REST APIs
  - MQTT
  - LwM2M
  - Custom connectors
- **Data Exchange**:
  - Device inventory
  - Firmware updates
  - Device configuration
  - Health monitoring
  - Security management

### Integration Implementation Approaches

The solution employs several implementation approaches to accommodate different integration scenarios:

#### Pre-built Connectors

- **Description**: Ready-to-use integration modules for common systems
- **Characteristics**:
  - Minimal configuration required
  - Standardized data mapping
  - Regular updates and maintenance
  - Documented limitations and capabilities
- **Examples**:
  - BACnet connector for building automation systems
  - CMMS connectors for maintenance integration
  - Weather service connectors
  - Energy management system connectors

#### Integration Framework

- **Description**: Configurable framework for creating custom integrations
- **Components**:
  - Protocol adapters
  - Data transformation tools
  - Mapping interfaces
  - Testing and validation tools
  - Monitoring capabilities
- **Use Cases**:
  - Integrating with proprietary systems
  - Complex data transformation requirements
  - Multi-step integration processes
  - Systems without pre-built connectors

#### API Gateway

- **Description**: Centralized entry point for external systems to access platform functionality
- **Features**:
  - Authentication and authorization
  - Rate limiting and throttling
  - Request routing
  - Response transformation
  - Monitoring and analytics
- **Use Cases**:
  - Exposing platform capabilities to external systems
  - Controlling access to internal services
  - Managing API versioning
  - Implementing cross-cutting concerns

#### Event Bus

- **Description**: Message-oriented middleware for event-driven integration
- **Features**:
  - Publish-subscribe messaging
  - Event routing and filtering
  - Event persistence
  - Guaranteed delivery
  - Scalable architecture
- **Use Cases**:
  - Real-time data synchronization
  - Loose coupling between systems
  - Complex event processing
  - Asynchronous workflows

## 7.2. API Documentation

The HeyZack B2B Building Management Solution provides comprehensive API documentation to enable successful integration with the platform. This documentation serves as a reference for developers, system integrators, and partners who need to interact with the platform programmatically.

### API Documentation Framework

The API documentation follows a structured framework to ensure clarity, completeness, and usability:

```mermaid
graph TD
    A[API Documentation] --> B[API Reference]
    A --> C[Integration Guides]
    A --> D[Code Examples]
    A --> E[API Explorer]
    A --> F[Change Management]
    
    B --> B1[Endpoints]
    B --> B2[Request/Response Formats]
    B --> B3[Authentication]
    B --> B4[Error Handling]
    B --> B5[Rate Limits]
    
    C --> C1[Getting Started]
    C --> C2[Use Case Guides]
    C --> C3[Best Practices]
    C --> C4[Troubleshooting]
    
    D --> D1[Code Snippets]
    D --> D2[SDKs]
    D --> D3[Sample Applications]
    
    E --> E1[Interactive Console]
    E --> E2[Request Builder]
    E --> E3[Response Visualizer]
    
    F --> F1[Versioning]
    F --> F2[Deprecation Policy]
    F --> F3[Migration Guides]
    F --> F4[Release Notes]
```

### API Reference Documentation

The API reference documentation provides detailed information about each API endpoint, including comprehensive documentation for the TUYA IoT Core API integration:

#### TUYA IoT Core API Reference

The TUYA IoT Core API provides comprehensive endpoints for device management, control, and data access:

```yaml
# Sample TUYA IoT Core API Endpoint Documentation

Endpoint: /v1.0/iot-03/devices/{device_id}/status
Method: GET
Description: Retrieves the current status of a specific device
Authentication: Required (Access Token)

Path Parameters:
  - device_id:
      Type: string
      Required: true
      Description: Unique identifier of the device

Query Parameters:
  - code_type:
      Type: string
      Enum: ["standard", "custom"]
      Default: "standard"
      Required: false
      Description: Type of status codes to return

Request Headers:
  - Authorization:
      Value: Bearer {access_token}
      Required: true
      Description: Authentication token
  - Content-Type:
      Value: application/json
      Required: true
      Description: Request format

Response:
  Status: 200 OK
  Content-Type: application/json
  Schema:
    type: object
    properties:
      result:
        type: boolean
        description: Operation success indicator
      t:
        type: integer
        description: Timestamp of the response
      status:
        type: array
        items:
          type: object
          properties:
            code:
              type: string
              description: Status code identifier
            value:
              type: any
              description: Current value of the status
            name:
              type: string
              description: Human-readable name of the status
            type:
              type: string
              description: Data type of the value
            unit:
              type: string
              description: Unit of measurement (if applicable)

Error Responses:
  - Status: 400 Bad Request
    Description: Invalid request parameters
  - Status: 401 Unauthorized
    Description: Missing or invalid authentication
  - Status: 403 Forbidden
    Description: Insufficient permissions
  - Status: 404 Not Found
    Description: Device not found
  - Status: 500 Internal Server Error
    Description: Server error

Example Request:
  curl -X GET "https://openapi.tuyaeu.com/v1.0/iot-03/devices/vdevo163108766151550/status" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json"

Example Response:
  {
    "result": true,
    "t": 1645520000000,
    "status": [
      {
        "code": "switch_1",
        "value": true,
        "name": "Switch",
        "type": "Boolean",
        "unit": ""
      },
      {
        "code": "temp_current",
        "value": 22.5,
        "name": "Current Temperature",
        "type": "Integer",
        "unit": "℃"
      },
      {
        "code": "humidity_value",
        "value": 45,
        "name": "Humidity",
        "type": "Integer",
        "unit": "%"
      }
    ]
  }

Notes:
  - Device status is returned in real-time
  - Status codes vary by device type
  - Custom status codes require additional permissions
```

```yaml
# Device Control API Endpoint

Endpoint: /v1.0/iot-03/devices/{device_id}/commands
Method: POST
Description: Sends control commands to a specific device
Authentication: Required (Access Token)

Path Parameters:
  - device_id:
      Type: string
      Required: true
      Description: Unique identifier of the device

Request Headers:
  - Authorization:
      Value: Bearer {access_token}
      Required: true
      Description: Authentication token
  - Content-Type:
      Value: application/json
      Required: true
      Description: Request format

Request Body:
  type: object
  properties:
    commands:
      type: array
      items:
        type: object
        properties:
          code:
            type: string
            description: Command code identifier
          value:
            type: any
            description: Command value to set

Response:
  Status: 200 OK
  Content-Type: application/json
  Schema:
    type: object
    properties:
      result:
        type: boolean
        description: Operation success indicator
      t:
        type: integer
        description: Timestamp of the response
      success:
        type: boolean
        description: Command execution success
      job_id:
        type: string
        description: Unique identifier for the command execution job

Error Responses:
  - Status: 400 Bad Request
    Description: Invalid request parameters
  - Status: 401 Unauthorized
    Description: Missing or invalid authentication
  - Status: 403 Forbidden
    Description: Insufficient permissions
  - Status: 404 Not Found
    Description: Device not found
  - Status: 500 Internal Server Error
    Description: Server error

Example Request:
  curl -X POST "https://openapi.tuyaeu.com/v1.0/iot-03/devices/vdevo163108766151550/commands" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "commands": [
      {
        "code": "switch_1",
        "value": true
      },
      {
        "code": "temp_set",
        "value": 23
      }
    ]
  }'

Example Response:
  {
    "result": true,
    "t": 1645520000000,
    "success": true,
    "job_id": "1234567890abcdef"
  }

Notes:
  - Commands are executed asynchronously
  - Command execution status can be checked using the job_id
  - Available commands vary by device type
  - Multiple commands can be sent in a single request
```

#### GO-Based Backend Implementation

The HeyZack BMS integrates with TUYA IoT Core using a GO-based backend implementation:

```go
// Sample Go code for TUYA IoT Core integration

package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"time"
)

// TUYA API configuration
type TuyaConfig struct {
	AccessID     string
	AccessSecret string
	Endpoint     string
}

// Device status response
type DeviceStatusResponse struct {
	Result bool `json:"result"`
	T      int64 `json:"t"`
	Status []struct {
		Code  string      `json:"code"`
		Value interface{} `json:"value"`
		Name  string      `json:"name"`
		Type  string      `json:"type"`
		Unit  string      `json:"unit"`
	} `json:"status"`
}

// Get device status from TUYA IoT Core
func GetDeviceStatus(config TuyaConfig, deviceID string) (*DeviceStatusResponse, error) {
	// Prepare request
	method := "GET"
	path := fmt.Sprintf("/v1.0/iot-03/devices/%s/status", deviceID)
	timestamp := strconv.FormatInt(time.Now().UnixNano()/1e6, 10)
	
	// Generate signature
	stringToSign := fmt.Sprintf("%s\n%s\n%s\n%s", method, "", "", path)
	signStr := config.AccessID + timestamp + stringToSign
	
	h := hmac.New(sha256.New, []byte(config.AccessSecret))
	h.Write([]byte(signStr))
	sign := hex.EncodeToString(h.Sum(nil))
	
	// Create request
	url := config.Endpoint + path
	req, err := http.NewRequest(method, url, nil)
	if err != nil {
		return nil, err
	}
	
	// Set headers
	req.Header.Set("client_id", config.AccessID)
	req.Header.Set("sign", sign)
	req.Header.Set("t", timestamp)
	req.Header.Set("sign_method", "HMAC-SHA256")
	req.Header.Set("Content-Type", "application/json")
	
	// Execute request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	
	// Parse response
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	
	var result DeviceStatusResponse
	err = json.Unmarshal(body, &result)
	if err != nil {
		return nil, err
	}
	
	return &result, nil
}

// Main function demonstrating TUYA IoT Core integration
func main() {
	// Initialize TUYA configuration
	config := TuyaConfig{
		AccessID:     "YOUR_ACCESS_ID",
		AccessSecret: "YOUR_ACCESS_SECRET",
		Endpoint:     "https://openapi.tuyaeu.com",
	}
	
	// Get device status
	deviceID := "vdevo163108766151550"
	status, err := GetDeviceStatus(config, deviceID)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
		return
	}
	
	// Process device status
	fmt.Printf("Device Status: %+v\n", status)
	
	// Additional integration logic...
}
```

#### React Mini-App Development

TUYA IoT Core supports the development of React-based mini-apps that can be embedded within the TUYA mobile applications:

```jsx
// Sample React component for TUYA mini-app

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TuyaDeviceManager, TuyaDeviceListener } from 'tuya-panel-kit';

const DeviceControlPanel = ({ deviceId }) => {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [temperature, setTemperature] = useState(22);
  
  useEffect(() => {
    // Initialize device
    const initDevice = async () => {
      try {
        setIsLoading(true);
        
        // Get device information
        const info = await TuyaDeviceManager.getDeviceInfo(deviceId);
        setDeviceInfo(info);
        
        // Get device status
        const status = await TuyaDeviceManager.getDeviceStatus(deviceId);
        
        // Update state based on device status
        if (status.switch_1 !== undefined) {
          setIsPowerOn(status.switch_1);
        }
        
        if (status.temp_current !== undefined) {
          setTemperature(status.temp_current);
        }
        
        // Register device listener
        TuyaDeviceListener.registerDeviceListener(deviceId, (data) => {
          if (data.switch_1 !== undefined) {
            setIsPowerOn(data.switch_1);
          }
          
          if (data.temp_current !== undefined) {
            setTemperature(data.temp_current);
          }
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize device:', error);
        setIsLoading(false);
      }
    };
    
    initDevice();
    
    // Cleanup
    return () => {
      TuyaDeviceListener.unregisterDeviceListener(deviceId);
    };
  }, [deviceId]);
  
  // Toggle device power
  const togglePower = async () => {
    try {
      await TuyaDeviceManager.publishDps(
        deviceId,
        { switch_1: !isPowerOn }
      );
    } catch (error) {
      console.error('Failed to toggle power:', error);
    }
  };
  
  // Set temperature
  const setDeviceTemperature = async (temp) => {
    try {
      await TuyaDeviceManager.publishDps(
        deviceId,
        { temp_set: temp }
      );
    } catch (error) {
      console.error('Failed to set temperature:', error);
    }
  };
  
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading device information...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.deviceName}>{deviceInfo?.name || 'Device'}</Text>
      
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Status:</Text>
        <Text style={styles.statusValue}>{isPowerOn ? 'ON' : 'OFF'}</Text>
      </View>
      
      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Temperature:</Text>
        <Text style={styles.statusValue}>{temperature}°C</Text>
      </View>
      
      <TouchableOpacity
        style={[styles.button, isPowerOn ? styles.buttonOn : styles.buttonOff]}
        onPress={togglePower}
      >
        <Text style={styles.buttonText}>{isPowerOn ? 'Turn OFF' : 'Turn ON'}</Text>
      </TouchableOpacity>
      
      <View style={styles.temperatureControls}>
        <TouchableOpacity
          style={styles.tempButton}
          onPress={() => setDeviceTemperature(temperature - 1)}
        >
          <Text style={styles.tempButtonText}>-</Text>
        </TouchableOpacity>
        
        <Text style={styles.tempValue}>{temperature}°C</Text>
        
        <TouchableOpacity
          style={styles.tempButton}
          onPress={() => setDeviceTemperature(temperature + 1)}
        >
          <Text style={styles.tempButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  deviceName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  statusLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 120,
  },
  statusValue: {
    fontSize: 16,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonOn: {
    backgroundColor: '#ff6b6b',
  },
  buttonOff: {
    backgroundColor: '#4ecdc4',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperatureControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  tempButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4ecdc4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  tempValue: {
    fontSize: 24,
    marginHorizontal: 20,
  },
});

export default DeviceControlPanel;
```

#### Core API Sections

The API is organized into logical sections based on functionality:

1. **Authentication & Authorization**
   - Token acquisition
   - Permission management
   - Session handling

2. **Building Management**
   - Building information
   - Space management
   - Occupancy data

3. **Asset Management**
   - Asset inventory
   - Asset monitoring
   - Asset maintenance

4. **Energy Management**
   - Energy consumption
   - Energy optimization
   - Energy reporting

5. **IoT & Sensor Management**
   - Device registration
   - Telemetry data
   - Device control

6. **Maintenance Management**
   - Work orders
   - Preventive maintenance
   - Service requests

7. **Security & Access Control**
   - Access management
   - Security monitoring
   - Incident reporting

8. **Analytics & Reporting**
   - Data queries
   - Report generation
   - Dashboard configuration

#### Endpoint Documentation Structure

Each API endpoint is documented with a consistent structure:

```yaml
Endpoint: /api/v1/buildings/{buildingId}/energy/consumption
Method: GET
Description: Retrieves energy consumption data for a specific building
Authentication: Required (Bearer Token)

Path Parameters:
  - buildingId:
      Type: string
      Format: UUID
      Required: true
      Description: Unique identifier of the building

Query Parameters:
  - startDate:
      Type: string
      Format: ISO 8601 (YYYY-MM-DD)
      Required: true
      Description: Start date for the consumption data
  - endDate:
      Type: string
      Format: ISO 8601 (YYYY-MM-DD)
      Required: true
      Description: End date for the consumption data
  - interval:
      Type: string
      Enum: ["hourly", "daily", "weekly", "monthly"]
      Default: "daily"
      Required: false
      Description: Aggregation interval for the consumption data
  - energyType:
      Type: string
      Enum: ["electricity", "gas", "water", "all"]
      Default: "all"
      Required: false
      Description: Type of energy to include

Request Headers:
  - Authorization:
      Value: Bearer {token}
      Required: true
      Description: Authentication token
  - Accept:
      Value: application/json
      Required: false
      Description: Response format

Response:
  Status: 200 OK
  Content-Type: application/json
  Schema:
    type: object
    properties:
      buildingId:
        type: string
        description: Building identifier
      startDate:
        type: string
        format: date
        description: Start date of the data
      endDate:
        type: string
        format: date
        description: End date of the data
      interval:
        type: string
        description: Aggregation interval
      data:
        type: array
        items:
          type: object
          properties:
            timestamp:
              type: string
              format: date-time
              description: Timestamp for the data point
            electricity:
              type: number
              description: Electricity consumption in kWh
            gas:
              type: number
              description: Gas consumption in m³
            water:
              type: number
              description: Water consumption in m³

Error Responses:
  - Status: 400 Bad Request
    Description: Invalid request parameters
    Schema: ErrorResponse
  - Status: 401 Unauthorized
    Description: Missing or invalid authentication
    Schema: ErrorResponse
  - Status: 403 Forbidden
    Description: Insufficient permissions
    Schema: ErrorResponse
  - Status: 404 Not Found
    Description: Building not found
    Schema: ErrorResponse
  - Status: 500 Internal Server Error
    Description: Server error
    Schema: ErrorResponse

Rate Limiting:
  Limit: 100 requests per minute
  Header: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset

Example Request:
  curl -X GET "https://api.heyzack.com/api/v1/buildings/123e4567-e89b-12d3-a456-426614174000/energy/consumption?startDate=2025-01-01&endDate=2025-01-31&interval=daily&energyType=electricity" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

Example Response:
  {
    "buildingId": "123e4567-e89b-12d3-a456-426614174000",
    "startDate": "2025-01-01",
    "endDate": "2025-01-31",
    "interval": "daily",
    "data": [
      {
        "timestamp": "2025-01-01T00:00:00Z",
        "electricity": 1250.5
      },
      {
        "timestamp": "2025-01-02T00:00:00Z",
        "electricity": 1305.2
      }
      // Additional data points...
    ]
  }

Notes:
  - Historical data is available for up to 3 years
  - Real-time data may have a delay of up to 15 minutes
  - Large date ranges may result in paginated responses
```

### API Data Models

The API documentation includes detailed information about data models used in requests and responses:

#### Common Data Models

```yaml
Building:
  type: object
  properties:
    id:
      type: string
      format: uuid
      description: Unique identifier for the building
    name:
      type: string
      description: Name of the building
    address:
      $ref: '#/components/schemas/Address'
    type:
      type: string
      enum: [commercial, residential, industrial, mixed]
      description: Type of building
    area:
      type: number
      description: Total area in square meters
    floors:
      type: integer
      description: Number of floors
    constructionYear:
      type: integer
      description: Year of construction
    renovationYear:
      type: integer
      description: Year of last major renovation
    energyClass:
      type: string
      description: Energy efficiency rating
    status:
      type: string
      enum: [active, inactive, underConstruction, underRenovation]
      description: Current status of the building
    coordinates:
      $ref: '#/components/schemas/GeoCoordinates'
    timezone:
      type: string
      description: Timezone of the building location
    createdAt:
      type: string
      format: date-time
      description: Creation timestamp
    updatedAt:
      type: string
      format: date-time
      description: Last update timestamp

Address:
  type: object
  properties:
    street:
      type: string
      description: Street address
    city:
      type: string
      description: City
    postalCode:
      type: string
      description: Postal code
    state:
      type: string
      description: State or province
    country:
      type: string
      description: Country code (ISO 3166-1 alpha-2)

GeoCoordinates:
  type: object
  properties:
    latitude:
      type: number
      format: float
      description: Latitude coordinate
    longitude:
      type: number
      format: float
      description: Longitude coordinate

ErrorResponse:
  type: object
  properties:
    code:
      type: string
      description: Error code
    message:
      type: string
      description: Human-readable error message
    details:
      type: object
      description: Additional error details
    requestId:
      type: string
      description: Request identifier for troubleshooting
```

### Integration Guides

The API documentation includes comprehensive integration guides to help developers successfully implement integrations:

#### Getting Started Guide

- **Purpose**: Provide a quick introduction to the API
- **Contents**:
  - API overview
  - Authentication setup
  - Making your first API call
  - Understanding responses
  - Error handling basics
  - Next steps

#### Use Case Guides

- **Purpose**: Provide guidance for common integration scenarios
- **Examples**:
  - Building portfolio management
  - Energy optimization integration
  - Maintenance workflow integration
  - IoT device integration
  - Reporting and analytics integration

#### Best Practices

- **Purpose**: Provide recommendations for optimal API usage
- **Topics**:
  - Authentication and security
  - Rate limiting and throttling
  - Error handling and retry strategies
  - Data synchronization patterns
  - Performance optimization
  - Webhook implementation

#### Troubleshooting Guide

- **Purpose**: Help developers resolve common issues
- **Contents**:
  - Common error codes and solutions
  - Authentication troubleshooting
  - Request validation issues
  - Performance problems
  - Connectivity issues
  - Support resources

### Code Examples and SDKs

The API documentation includes code examples and software development kits (SDKs) to accelerate integration development:

#### Code Snippets

- **Languages**:
  - JavaScript/TypeScript
  - Python
  - Java
  - C#
  - PHP
- **Examples**:
  - Authentication
  - CRUD operations
  - Webhook handling
  - Real-time data subscription
  - Error handling

#### Client Libraries

- **Official SDKs**:
  - JavaScript SDK
  - Python SDK
  - Java SDK
- **Community Libraries**:
  - Links to community-maintained libraries
  - Contribution guidelines

#### Sample Applications

- **Purpose**: Demonstrate complete integration scenarios
- **Examples**:
  - Energy dashboard application
  - Maintenance management integration
  - IoT device management portal
  - Building performance analytics

### API Explorer

The API documentation includes interactive tools to explore and test the API:

#### Interactive Console

- **Features**:
  - Live API testing
  - Authentication setup
  - Request parameter configuration
  - Response visualization
  - Code generation

#### Request Builder

- **Features**:
  - Visual request construction
  - Parameter validation
  - Authentication configuration
  - Header management
  - Query parameter builder

#### Response Visualizer

- **Features**:
  - JSON formatting and syntax highlighting
  - Response schema validation
  - Field documentation
  - Error explanation
  - Response headers display

### API Change Management

The API documentation includes information about API versioning, deprecation, and changes:

#### Versioning Policy

- **Versioning Scheme**: Semantic versioning (Major.Minor.Patch)
- **Version Lifecycle**:
  - Development: Early access for testing
  - General Availability: Stable for production use
  - Deprecated: Scheduled for removal
  - Sunset: No longer available
- **Version Support**: Each major version supported for minimum of 24 months

#### Deprecation Policy

- **Notification Process**:
  - Advance notice: Minimum 12 months for major changes
  - Documentation updates
  - Email notifications
  - API response headers
- **Transition Support**:
  - Migration guides
  - Compatibility tools
  - Support channels

#### Migration Guides

- **Purpose**: Help developers transition between API versions
- **Contents**:
  - Feature comparison
  - Breaking changes
  - Code migration examples
  - Testing recommendations
  - Rollback procedures

#### Release Notes

- **Purpose**: Document changes in each API version
- **Contents**:
  - New features
  - Bug fixes
  - Breaking changes
  - Performance improvements
  - Security updates

## 7.3. Authentication Protocols

The HeyZack B2B Building Management Solution implements robust authentication protocols to ensure secure access to the platform's APIs and services. These protocols provide multiple authentication methods to accommodate different integration scenarios while maintaining high security standards.

### Authentication Framework

The authentication framework provides a comprehensive approach to securing API access:

```mermaid
graph TD
    A[Authentication Framework] --> B[Authentication Methods]
    A --> C[Token Management]
    A --> D[Authorization]
    A --> E[Security Features]
    
    B --> B1[OAuth 2.0]
    B --> B2[API Keys]
    B --> B3[JWT]
    B --> B4[SAML]
    B --> B5[Client Certificates]
    
    C --> C1[Token Issuance]
    C --> C2[Token Validation]
    C --> C3[Token Refresh]
    C --> C4[Token Revocation]
    
    D --> D1[Role-Based Access]
    D --> D2[Scope-Based Access]
    D --> D3[Resource-Based Access]
    D --> D4[Tenant Isolation]
    
    E --> E1[Rate Limiting]
    E --> E2[IP Restrictions]
    E --> E3[Audit Logging]
    E --> E4[Threat Protection]
```

### Authentication Methods

The platform supports multiple authentication methods to accommodate different integration scenarios:

#### OAuth 2.0 / OpenID Connect

- **Purpose**: Industry-standard protocol for authorization and authentication
- **Grant Types Supported**:
  - Authorization Code: For web applications
  - Client Credentials: For server-to-server communication
  - Resource Owner Password: For trusted first-party applications
  - Refresh Token: For maintaining long-term access
- **Features**:
  - Secure token-based authentication
  - Separation of authentication and authorization
  - Support for third-party identity providers
  - Fine-grained scope control
  - Token refresh capabilities
- **Implementation**:
  - Standards-compliant OAuth 2.0 implementation
  - OpenID Connect for identity information
  - JWT-based tokens with signature validation
  - Secure token storage recommendations

#### API Keys

- **Purpose**: Simple authentication for basic integrations
- **Types**:
  - Public API keys: For client-side applications (limited access)
  - Private API keys: For server-side applications (full access)
  - Scoped API keys: For limited-purpose integrations
- **Features**:
  - Simple implementation
  - Long-lived credentials
  - Service-specific access control
  - Usage tracking and quotas
- **Security Measures**:
  - Key rotation capabilities
  - Usage restrictions
  - IP address binding
  - Rate limiting

#### JSON Web Tokens (JWT)

- **Purpose**: Self-contained tokens for stateless authentication
- **Implementation**:
  - Signed tokens (JWS) using RS256 algorithm
  - Optional encryption (JWE) for sensitive payloads
  - Standard JWT claims (iss, sub, exp, iat, etc.)
  - Custom claims for application-specific data
- **Features**:
  - Stateless validation
  - Tamper-proof design
  - Expiration control
  - Audience validation
- **Usage Scenarios**:
  - Service-to-service communication
  - Single sign-on implementations
  - Temporary access delegation
  - Webhook signature validation

#### SAML 2.0

- **Purpose**: Enterprise authentication integration
- **Features**:
  - XML-based authentication assertions
  - Identity provider integration
  - Single sign-on capabilities
  - Rich attribute exchange
- **Implementation**:
  - SAML 2.0 Web Browser SSO Profile
  - IdP-initiated and SP-initiated flows
  - Signed and encrypted assertions
  - Metadata exchange
- **Usage Scenarios**:
  - Enterprise customer integrations
  - Corporate identity provider connections
  - Legacy system integration

#### Client Certificates (mTLS)

- **Purpose**: High-security machine-to-machine authentication
- **Features**:
  - Mutual TLS authentication
  - Certificate-based client identification
  - Strong cryptographic security
  - No token transmission required
- **Implementation**:
  - X.509 certificate validation
  - Certificate revocation checking
  - Certificate pinning options
  - Certificate lifecycle management
- **Usage Scenarios**:
  - High-security integrations
  - IoT device authentication
  - Critical infrastructure connections

### Token Management

The platform implements comprehensive token management to ensure secure authentication:

#### Token Issuance

- **Process**:
  - Authentication verification
  - Scope validation
  - Token generation with appropriate claims
  - Optional token encryption
  - Response with token and metadata
- **Token Types**:
  - Access tokens: Short-lived tokens for API access
  - Refresh tokens: Long-lived tokens for obtaining new access tokens
  - ID tokens: Tokens containing identity information
- **Token Format**:
  - JWT-based tokens
  - Signed with RS256 (asymmetric)
  - Standard and custom claims
  - Configurable expiration

#### Token Validation

- **Validation Checks**:
  - Signature verification
  - Expiration check
  - Issuer validation
  - Audience validation
  - Scope verification
  - Not-before time check
  - Token revocation check
- **Performance Optimization**:
  - Caching of public keys
  - Distributed validation
  - Token introspection for high-security scenarios

#### Token Refresh

- **Process**:
  - Refresh token validation
  - User/client verification
  - New access token issuance
  - Optional refresh token rotation
- **Security Measures**:
  - Limited refresh token lifetime
  - Single-use refresh tokens
  - Refresh token binding to client
  - Revocation on suspicious activity

#### Token Revocation

- **Revocation Methods**:
  - Explicit revocation endpoint
  - User-initiated logout
  - Administrative revocation
  - Suspicious activity detection
- **Revocation Scope**:
  - Single token revocation
  - All tokens for a user
  - All tokens for a client
  - All tokens with specific scopes

### Authorization Framework

Authentication is coupled with a comprehensive authorization framework:

#### Role-Based Access Control (RBAC)

- **Roles**:
  - System Administrator: Full system access
  - Building Manager: Management of assigned buildings
  - Energy Manager: Access to energy data and controls
  - Maintenance Technician: Access to maintenance functions
  - Security Officer: Access to security systems
  - Tenant: Limited access to tenant-specific features
- **Implementation**:
  - Role assignment to users
  - Role hierarchy support
  - Role inheritance
  - Role-based UI adaptation
  - Role auditing and reporting

#### Scope-Based Access Control

- **Scopes**:
  - read:buildings: Read access to building information
  - write:buildings: Write access to building information
  - read:energy: Read access to energy data
  - write:energy: Write access to energy settings
  - read:maintenance: Read access to maintenance information
  - write:maintenance: Write access to maintenance records
  - admin: Administrative access
- **Implementation**:
  - Scope assignment to tokens
  - Scope verification for API requests
  - Scope-based UI element visibility
  - Scope documentation for developers

#### Resource-Based Access Control

- **Resources**:
  - Buildings: Access to specific buildings
  - Spaces: Access to specific spaces within buildings
  - Assets: Access to specific equipment and systems
  - Reports: Access to specific reports and analytics
  - Configurations: Access to system configuration
- **Implementation**:
  - Resource ownership assignment
  - Resource access policies
  - Resource-level permissions
  - Resource group management

#### Tenant Isolation

- **Purpose**: Ensure separation between different customer environments
- **Implementation**:
  - Multi-tenant architecture
  - Tenant-specific data storage
  - Cross-tenant access controls
  - Tenant context in all operations
  - Tenant-aware caching

### Security Features

The authentication framework includes additional security features:

#### Rate Limiting

- **Purpose**: Prevent abuse and ensure fair resource allocation
- **Implementation**:
  - Per-client rate limits
  - Per-endpoint rate limits
  - Graduated response (warning, temporary block, permanent block)
  - Rate limit headers in responses
  - Configurable limits by client tier

#### IP Restrictions

- **Purpose**: Limit API access to trusted networks
- **Implementation**:
  - IP allowlisting for sensitive operations
  - Geolocation-based restrictions
  - VPN/private network requirements for admin functions
  - Suspicious IP detection
  - IP change monitoring

#### Audit Logging

- **Purpose**: Track authentication and authorization activities
- **Implementation**:
  - Comprehensive logging of authentication events
  - Authorization decision logging
  - Token lifecycle event logging
  - Access pattern analysis
  - Compliance reporting

#### Threat Protection

- **Purpose**: Detect and prevent malicious authentication attempts
- **Implementation**:
  - Brute force protection
  - Credential stuffing detection
  - Token theft detection
  - Anomalous access pattern detection
  - Automated blocking of suspicious activity

## 7.4. Data Exchange Standards

The HeyZack B2B Building Management Solution implements standardized data exchange formats and protocols to ensure interoperability, consistency, and efficiency in data communication between systems.

### Data Format Standards

The platform supports multiple data format standards to accommodate different integration scenarios:

#### JSON (JavaScript Object Notation)

- **Primary Use**: REST API requests and responses
- **Advantages**:
  - Human-readable format
  - Wide language support
  - Efficient parsing
  - Flexible schema
- **Implementation**:
  - JSON Schema validation
  - Consistent property naming conventions
  - Standardized date/time formatting (ISO 8601)
  - Proper handling of numeric precision
- **Example**:

```json
{
  "building": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "Corporate Headquarters",
    "address": {
      "street": "123 Main Street",
      "city": "Paris",
      "postalCode": "75001",
      "country": "FR"
    },
    "energyData": {
      "timestamp": "2025-01-15T14:30:00Z",
      "consumption": {
        "electricity": 1250.5,
        "gas": 450.2,
        "water": 28.7
      }
    }
  }
}
```

#### XML (eXtensible Markup Language)

- **Primary Use**: Integration with legacy systems and SOAP services
- **Advantages**:
  - Strong schema validation
  - Namespace support
  - Legacy system compatibility
  - Complex document structures
- **Implementation**:
  - XML Schema Definition (XSD) validation
  - Consistent element naming
  - Proper namespace usage
  - XSLT transformations for format conversion
- **Example**:

```xml
<Building id="123e4567-e89b-12d3-a456-426614174000">
  <Name>Corporate Headquarters</Name>
  <Address>
    <Street>123 Main Street</Street>
    <City>Paris</City>
    <PostalCode>75001</PostalCode>
    <Country>FR</Country>
  </Address>
  <EnergyData timestamp="2025-01-15T14:30:00Z">
    <Consumption>
      <Electricity unit="kWh">1250.5</Electricity>
      <Gas unit="m3">450.2</Gas>
      <Water unit="m3">28.7</Water>
    </Consumption>
  </EnergyData>
</Building>
```

#### CSV (Comma-Separated Values)

- **Primary Use**: Bulk data export and import
- **Advantages**:
  - Simple format for tabular data
  - Widely supported by spreadsheet applications
  - Compact representation
  - Easy human editing
- **Implementation**:
  - Consistent header row
  - RFC 4180 compliance
  - Proper escaping of special characters
  - UTF-8 encoding
- **Example**:

```csv
timestamp,building_id,building_name,electricity_kwh,gas_m3,water_m3
2025-01-15T14:00:00Z,123e4567-e89b-12d3-a456-426614174000,Corporate Headquarters,1250.5,450.2,28.7
2025-01-15T15:00:00Z,123e4567-e89b-12d3-a456-426614174000,Corporate Headquarters,1275.3,460.1,30.2
2025-01-15T16:00:00Z,123e4567-e89b-12d3-a456-426614174000,Corporate Headquarters,1310.7,455.8,29.5
```

#### Protocol Buffers

- **Primary Use**: High-performance data exchange
- **Advantages**:
  - Compact binary format
  - Efficient serialization/deserialization
  - Strong typing
  - Schema evolution support
- **Implementation**:
  - Proto3 syntax
  - Consistent message naming
  - Backward compatibility maintenance
  - Language-specific code generation
- **Example Schema**:

```protobuf
syntax = "proto3";

message Building {
  string id = 1;
  string name = 2;
  Address address = 3;
  EnergyData energy_data = 4;
}

message Address {
  string street = 1;
  string city = 2;
  string postal_code = 3;
  string country = 4;
}

message EnergyData {
  string timestamp = 1;
  Consumption consumption = 2;
}

message Consumption {
  double electricity = 1;
  double gas = 2;
  double water = 3;
}
```

### Data Exchange Protocols

The platform supports multiple data exchange protocols to accommodate different integration scenarios:

#### REST (Representational State Transfer)

- **Primary Use**: General-purpose API access
- **Characteristics**:
  - Resource-oriented architecture
  - Stateless operations
  - Standard HTTP methods (GET, POST, PUT, DELETE)
  - Status code-based responses
- **Implementation**:
  - Consistent URL structure
  - Proper HTTP method usage
  - Comprehensive status code usage
  - Hypermedia links (HATEOAS)
- **Best Practices**:
  - Versioned API endpoints
  - Consistent resource naming
  - Proper use of HTTP status codes
  - Pagination for large result sets
  - Filtering, sorting, and field selection

#### GraphQL

- **Primary Use**: Flexible data querying and aggregation
- **Characteristics**:
  - Client-specified data retrieval
  - Single endpoint for multiple resources
  - Strong typing system
  - Introspection capabilities
- **Implementation**:
  - Comprehensive schema definition
  - Resolver implementation
  - Query complexity management
  - Caching strategies
- **Best Practices**:
  - Pagination using cursor-based approach
  - Error handling with typed errors
  - Query depth limiting
  - Persisted queries for performance

#### MQTT (Message Queuing Telemetry Transport)

- **Primary Use**: IoT device communication
- **Characteristics**:
  - Lightweight publish-subscribe protocol
  - Low bandwidth requirements
  - Quality of Service levels
  - Retained message support
- **Implementation**:
  - Topic structure standardization
  - QoS level guidelines
  - Client identifier conventions
  - Last Will and Testament usage
- **Best Practices**:
  - Hierarchical topic structure
  - Appropriate QoS level selection
  - Secure connection with TLS
  - Client authentication

#### WebSockets

- **Primary Use**: Real-time data streaming
- **Characteristics**:
  - Persistent bidirectional connection
  - Low-latency communication
  - Full-duplex messaging
  - Event-driven architecture
- **Implementation**:
  - Connection management
  - Heartbeat mechanism
  - Reconnection strategies
  - Message format standardization
- **Best Practices**:
  - Authentication token validation
  - Rate limiting
  - Graceful degradation
  - Compression for large messages

### Data Models and Schemas

The platform implements standardized data models to ensure consistency across integrations:

#### Building Information Model

- **Purpose**: Standardize building-related data
- **Key Entities**:
  - Buildings
  - Spaces
  - Floors
  - Zones
  - Assets
- **Standards Alignment**:
  - Industry Foundation Classes (IFC)
  - Building Information Modeling (BIM)
  - ASHRAE 223P

#### Device Data Model

- **Purpose**: Standardize IoT device data
- **Key Entities**:
  - Devices
  - Sensors
  - Actuators
  - Measurements
  - Commands
- **Standards Alignment**:
  - Web of Things (WoT)
  - oneM2M
  - OMA LwM2M

#### Energy Data Model

- **Purpose**: Standardize energy-related data
- **Key Entities**:
  - Energy consumption
  - Energy production
  - Energy storage
  - Energy quality
  - Energy cost
- **Standards Alignment**:
  - Green Button
  - ASHRAE 201
  - IEC 61970 (CIM)

### Data Transformation and Mapping

The platform provides capabilities for transforming data between different formats and schemas:

#### Transformation Patterns

- **Purpose**: Convert data between different formats and structures
- **Patterns**:
  - Direct mapping: Field-to-field correspondence
  - Aggregation: Combining multiple fields into one
  - Splitting: Dividing one field into multiple
  - Value conversion: Changing data types or units
  - Enrichment: Adding derived or looked-up data
- **Implementation**:
  - Declarative mapping definitions
  - Transformation rule engine
  - Custom transformation functions
  - Validation of transformed data

#### Canonical Data Model

- **Purpose**: Provide a common internal data representation
- **Characteristics**:
  - System-independent structure
  - Comprehensive entity coverage
  - Consistent naming conventions
  - Extensible design
- **Benefits**:
  - Reduced number of transformations
  - Consistent data representation
  - Simplified integration maintenance
  - Better change management

#### Unit Conversion

- **Purpose**: Standardize measurement units across integrations
- **Supported Conversions**:
  - Energy: kWh, MWh, GJ, BTU
  - Power: kW, MW, HP
  - Temperature: °C, °F, K
  - Volume: m³, L, gal
  - Area: m², ft²
- **Implementation**:
  - Standard unit for each measurement type
  - Automatic conversion during data exchange
  - Unit metadata in API responses
  - Configurable display preferences

## 7.5. Webhook System

The HeyZack B2B Building Management Solution includes a comprehensive webhook system that enables real-time event notifications to external systems. This system allows integration partners to receive immediate updates when specific events occur within the platform.

### Webhook Architecture

The webhook system follows a robust architecture to ensure reliable event delivery:

```mermaid
graph TD
    A[Event Sources] --> B[Event Bus]
    B --> C[Event Filter]
    C --> D[Webhook Manager]
    D --> E[Delivery Service]
    E --> F[External Systems]
    E --> G[Retry Queue]
    G --> E
    
    H[Webhook Registry] --> D
    I[Security Module] --> E
    J[Monitoring System] <--> E
```

### Event Types

The webhook system supports notifications for various event types:

#### Building Management Events

- **Building Created**: New building added to the system
- **Building Updated**: Building information modified
- **Building Deleted**: Building removed from the system
- **Space Created**: New space added to a building
- **Space Updated**: Space information modified
- **Space Deleted**: Space removed from a building
- **Occupancy Changed**: Building or space occupancy status changed

#### Energy Management Events

- **Energy Consumption Alert**: Energy usage exceeds threshold
- **Energy Optimization Opportunity**: System identified potential savings
- **Energy Report Generated**: New energy report available
- **Demand Response Event**: Grid demand response event notification
- **Energy Tariff Changed**: Energy pricing structure updated
- **Carbon Emissions Updated**: Carbon footprint calculations refreshed

#### Asset Management Events

- **Asset Created**: New asset added to the system
- **Asset Updated**: Asset information modified
- **Asset Deleted**: Asset removed from the system
- **Asset Status Changed**: Asset operational status changed
- **Asset Performance Alert**: Asset performance outside normal parameters
- **Warranty Expiration**: Asset warranty approaching expiration

#### Maintenance Events

- **Maintenance Due**: Scheduled maintenance approaching
- **Work Order Created**: New maintenance work order created
- **Work Order Updated**: Work order status or details changed
- **Work Order Completed**: Maintenance work completed
- **Predictive Maintenance Alert**: System predicted potential failure
- **Maintenance Report Generated**: New maintenance report available

#### Security Events

- **Security Alert**: Security-related incident detected
- **Access Granted**: Access permission granted to user
- **Access Denied**: Access attempt rejected
- **Access Pattern Changed**: Unusual access pattern detected
- **Security System Status Changed**: Security system state changed
- **Security Audit Completed**: Security audit process completed

### Webhook Configuration

The webhook system provides flexible configuration options:

#### Subscription Management

- **Subscription Creation**:
  - Event type selection
  - Endpoint URL specification
  - Optional filtering criteria
  - Authentication configuration
  - Retry policy selection
- **Subscription Updates**:
  - Modification of existing subscriptions
  - Temporary suspension
  - Event type addition/removal
  - Filter adjustment
- **Subscription Deletion**:
  - Immediate termination of notifications
  - Optional grace period
  - Subscription archiving

#### Event Filtering

- **Filter Types**:
  - Entity-based: Filter by specific buildings, assets, etc.
  - Attribute-based: Filter by property values
  - Threshold-based: Filter by value thresholds
  - Time-based: Filter by time of day or day of week
  - Severity-based: Filter by event importance
- **Filter Combinations**:
  - AND/OR logical operators
  - Nested filter groups
  - Regular expression support
  - Wildcard matching

#### Delivery Configuration

- **Retry Policy**:
  - Configurable retry attempts
  - Exponential backoff
  - Dead letter queue for failed deliveries
  - Manual retry triggering
- **Batch Options**:
  - Real-time delivery
  - Batched delivery (time or count-based)
  - Compression for large payloads
  - Priority settings

### Webhook Payload Structure

The webhook system delivers events with a consistent payload structure:

```json
{
  "id": "evt_123e4567e89b12d3a456426614174000",
  "type": "asset.status.changed",
  "created": "2025-01-15T14:30:00Z",
  "data": {
    "asset": {
      "id": "ast_456e789f12a34b5c6d78901234567890",
      "name": "AHU-01",
      "type": "Air Handling Unit",
      "location": {
        "building_id": "bld_789f123e45a67b8c90d123456789012",
        "building_name": "Corporate Headquarters",
        "floor": "3",
        "room": "Mechanical Room 3A"
      }
    },
    "status": {
      "previous": "operational",
      "current": "warning",
      "timestamp": "2025-01-15T14:28:37Z",
      "reason": "Abnormal vibration detected"
    }
  },
  "metadata": {
    "subscription_id": "sub_234f567e89a01b2c3d45678901234567",
    "delivery_attempt": 1,
    "version": "1.0"
  }
}
```

### Webhook Security

The webhook system implements robust security measures:

#### Authentication Methods

- **HMAC Signatures**:
  - Request signing with shared secret
  - Timestamp inclusion to prevent replay attacks
  - Algorithm selection (SHA-256, SHA-512)
  - Signature placement in HTTP header
- **OAuth 2.0 Client Credentials**:
  - Token-based authentication
  - Scope-limited access
  - Token expiration and renewal
  - Standard OAuth flow
- **API Keys**:
  - Simple key-based authentication
  - Key rotation support
  - IP restriction options
  - Usage tracking

#### Security Best Practices

- **TLS Encryption**: All webhook deliveries use HTTPS
- **Payload Minimization**: Only necessary data included
- **Sensitive Data Handling**: Optional field exclusion or masking
- **Rate Limiting**: Protection against delivery floods
- **IP Allowlisting**: Optional restriction to specific IP ranges
- **Webhook Secret Rotation**: Periodic credential rotation

### Webhook Management

The webhook system includes comprehensive management capabilities:

#### Monitoring and Troubleshooting

- **Delivery Logs**:
  - Success/failure status
  - Response codes and bodies
  - Delivery timestamps
  - Retry information
- **Performance Metrics**:
  - Delivery latency
  - Success rate
  - Retry frequency
  - Payload size
- **Alerting**:
  - Delivery failure notifications
  - Endpoint performance degradation
  - Unusual event patterns
  - Configuration issues

#### Testing Tools

- **Webhook Simulator**:
  - Manual event triggering
  - Sample payload generation
  - Response inspection
  - Delivery verification
- **Endpoint Validation**:
  - Connectivity checking
  - Authentication verification
  - Response time measurement
  - TLS certificate validation

#### Documentation and Examples

- **Implementation Guides**:
  - Step-by-step setup instructions
  - Security implementation examples
  - Event handling best practices
  - Troubleshooting guidance
- **Code Samples**:
  - Webhook receiver implementations
  - Signature verification examples
  - Event processing patterns
  - Error handling approaches
