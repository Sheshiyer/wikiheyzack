# HeyZack BMS Design System

## Core Design Principles

### 1. Spatial Visualization
- **3D Building Model**
  - Interactive building visualization using Three.js
  - Real-time data overlay capabilities
  - Floor-by-floor navigation
  - Sensor location mapping
  - Color-coded status indicators
  - Zoom and rotate controls

### 2. Information Architecture (Bento Grid)

#### Desktop Layout
```
┌─────────┬─────────┬─────────┐
│ Building│  Energy │ Alerts  │
│ Status  │ Metrics │ Panel   │
├─────────┼─────────┼─────────┤
│   3D    │ System  │ Environ │
│ Model   │ Health  │ Data    │
├─────────┼─────────┼─────────┤
│ Occupan.│ Mainten.│ Reports │
│ Flow    │ Schedule│ & Logs  │
└─────────┴─────────┴─────────┘
```

#### Mobile Layout (Priority Order)
1. Alerts Panel
2. Building Status
3. Energy Metrics
4. 3D Model (Optimized)
5. System Health
6. Environmental Data
7. Additional Metrics

### 3. Color System

#### Primary Colors
- Background: `#1A1A1A` (Dark Mode)
- Primary: `#0066FF` (Interactive Elements)
- Secondary: `#00C853` (Success States)
- Accent: `#FF3D00` (Alerts)

#### Data Visualization
- Temperature: `#FF6B6B` to `#4ECDC4` (Gradient)
- Occupancy: `#95A5A6` to `#2ECC71` (Gradient)
- Energy: `#3498DB` to `#E74C3C` (Consumption Range)

### 4. Typography

```css
/* Headings */
h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
}

/* Body Text */
p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
}

/* Data Values */
.metric {
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  font-size: 16px;
}
```

### 5. Component Library

#### Data Cards
```css
.data-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  backdrop-filter: blur(10px);
}

.data-card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.data-card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

#### Charts
- Line Charts: Real-time energy consumption
- Heat Maps: Occupancy visualization
- Gauge Charts: System performance
- Bar Charts: Resource utilization

#### 3D Model Controls
```css
.model-controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
}

.control-button {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 6. Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Tablet (768px and up) */
@media screen and (min-width: 768px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop (1024px and up) */
@media screen and (min-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large Desktop (1440px and up) */
@media screen and (min-width: 1440px) {
  .bento-grid {
    gap: 24px;
    max-width: 1400px;
    margin: 0 auto;
  }
}
```

### 7. Animation Guidelines

```css
/* Smooth Transitions */
.transition-base {
  transition: all 0.3s ease;
}

/* Card Hover Effects */
.data-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* 3D Model Animations */
.model-transition {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 8. Interaction States

```css
/* Interactive Elements */
.interactive {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.interactive:hover {
  opacity: 0.8;
}

/* Focus States */
.interactive:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Active States */
.interactive:active {
  transform: scale(0.98);
}
```

### 9. Data Visualization Guidelines

#### Chart Colors
- Use consistent color schemes across all charts
- Implement color-blind friendly palettes
- Maintain sufficient contrast ratios

#### 3D Model Highlights
- Use subtle glow effects for active areas
- Implement transparent overlays for data layers
- Maintain visual hierarchy with opacity levels

### 10. Accessibility

- High contrast color modes
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Alternative text for visual elements
- ARIA labels for interactive components

### 11. Performance Optimization

#### 3D Model Loading
- Progressive loading of model details
- Level of detail (LOD) management
- Texture compression
- Geometry optimization

#### Data Updates
- WebSocket connections for real-time data
- Debounced updates for performance
- Cached data management
- Lazy loading of non-critical components

### 12. Dashboard Component Library

#### Navigation Components
```typescript
interface NavigationProps {
  activeSection: string;
  userRole: 'admin' | 'manager' | 'operator';
  notifications: Notification[];
  onSectionChange: (section: string) => void;
}

// Components
1. GlobalNavBar {
  logo: ReactNode;
  primaryNav: MenuItem[];
  userMenu: UserMenuProps;
  searchBar: SearchProps;
  notifications: NotificationCenter;
}

2. SidebarNavigation {
  sections: Section[];
  collapsed: boolean;
  quickActions: QuickAction[];
  favorites: Favorite[];
}

3. BreadcrumbTrail {
  path: PathSegment[];
  onNavigate: (path: string) => void;
}
```

#### Building Visualization Components
```typescript
interface BuildingModelProps {
  modelUrl: string;
  floors: Floor[];
  activeFloor?: number;
  sensorData: SensorDataPoint[];
  highlights: HighlightArea[];
}

// Components
1. ThreeDModel {
  modelConfig: ModelConfig;
  interactionControls: Controls;
  overlayData: OverlayConfig;
  performance: PerformanceSettings;
}

2. FloorSelector {
  floors: Floor[];
  activeFloor: number;
  floorData: FloorMetrics[];
  onFloorSelect: (floor: number) => void;
}

3. SensorOverlay {
  sensors: Sensor[];
  dataType: 'temperature' | 'occupancy' | 'energy';
  visualizationType: 'heatmap' | 'points' | 'zones';
}
```

#### Metric Cards
```typescript
interface MetricCardProps {
  title: string;
  value: number | string;
  unit?: string;
  trend?: {
    direction: 'up' | 'down' | 'stable';
    percentage: number;
  };
  timeframe: 'realtime' | 'hourly' | 'daily' | 'weekly';
}

// Components
1. EnergyConsumptionCard {
  consumption: EnergyData;
  costs: CostBreakdown;
  comparison: ComparisonData;
  goals: EnergyGoals;
}

2. EnvironmentalMetricsCard {
  temperature: TemperatureData;
  humidity: HumidityData;
  airQuality: AirQualityMetrics;
  comfort: ComfortIndex;
}

3. OccupancyCard {
  currentOccupancy: number;
  capacity: number;
  distribution: ZoneOccupancy[];
  peakHours: TimeRange[];
}

4. MaintenanceStatusCard {
  activeIssues: Issue[];
  scheduledTasks: Task[];
  systemHealth: HealthMetrics;
  priority: 'high' | 'medium' | 'low';
}
```

#### Chart Components
```typescript
interface ChartProps {
  data: DataPoint[];
  type: ChartType;
  dimensions: Dimensions;
  interactions: InteractionConfig;
}

// Components
1. EnergyConsumptionChart {
  timeRange: DateRange;
  granularity: TimeGranularity;
  metrics: EnergyMetric[];
  comparison?: ComparisonData;
}

2. OccupancyHeatmap {
  floorPlan: FloorPlanData;
  occupancyData: OccupancyPoint[];
  timeframe: TimeRange;
  resolution: 'high' | 'medium' | 'low';
}

3. SystemPerformanceGauge {
  value: number;
  thresholds: Threshold[];
  label: string;
  size: 'small' | 'medium' | 'large';
}

4. ResourceUtilizationChart {
  resources: Resource[];
  usage: UsageData[];
  forecast: ForecastData;
  alerts: Alert[];
}
```

#### Alert & Notification Components
```typescript
interface AlertProps {
  severity: 'critical' | 'warning' | 'info';
  message: string;
  timestamp: Date;
  source: string;
  actions: Action[];
}

// Components
1. AlertPanel {
  alerts: Alert[];
  filters: AlertFilter[];
  sorting: SortConfig;
  grouping: GroupConfig;
}

2. NotificationCenter {
  notifications: Notification[];
  preferences: NotificationPreferences;
  actions: NotificationActions;
}

3. AlertDetailsModal {
  alert: AlertDetails;
  history: AlertHistory[];
  relatedIssues: Issue[];
  resolution: ResolutionSteps[];
}
```

#### Control Components
```typescript
interface ControlProps {
  system: 'hvac' | 'lighting' | 'security';
  zone: Zone;
  permissions: Permission[];
  status: SystemStatus;
}

// Components
1. HVACControls {
  temperature: TemperatureControl;
  mode: OperationMode;
  schedule: Schedule;
  zoning: ZoneConfig;
}

2. LightingControls {
  brightness: number;
  color: ColorTemp;
  scenes: LightingScene[];
  automation: AutomationRules;
}

3. SecurityControls {
  accessPoints: AccessPoint[];
  cameras: Camera[];
  alerts: SecurityAlert[];
  logs: SecurityLog[];
}
```

#### Schedule & Planning Components
```typescript
interface ScheduleProps {
  events: Event[];
  resources: Resource[];
  view: 'day' | 'week' | 'month';
  interactions: InteractionConfig;
}

// Components
1. MaintenanceScheduler {
  tasks: Task[];
  workers: Worker[];
  availability: TimeSlot[];
  priorities: Priority[];
}

2. ResourceBooking {
  spaces: Space[];
  equipment: Equipment[];
  availability: Availability[];
  restrictions: BookingRules[];
}

3. EventCalendar {
  events: CalendarEvent[];
  facilities: Facility[];
  conflicts: Conflict[];
  recurrence: RecurrenceRule[];
}
```

#### Settings & Configuration Components
```typescript
interface SettingsProps {
  category: SettingCategory;
  permissions: Permission[];
  onChange: (setting: Setting) => void;
}

// Components
1. SystemSettings {
  preferences: UserPreferences;
  notifications: NotificationSettings;
  display: DisplaySettings;
  integration: IntegrationConfig;
}

2. UserManagement {
  users: User[];
  roles: Role[];
  permissions: Permission[];
  activity: ActivityLog[];
}

3. BuildingConfig {
  zones: Zone[];
  systems: System[];
  schedules: Schedule[];
  automation: AutomationRule[];
}
```

#### Report & Analytics Components
```typescript
interface ReportProps {
  type: ReportType;
  data: ReportData;
  format: FormatOptions;
  export: ExportConfig;
}

// Components
1. EnergyReport {
  consumption: ConsumptionData;
  costs: CostAnalysis;
  savings: SavingsMetrics;
  recommendations: Recommendation[];
}

2. OccupancyAnalytics {
  patterns: OccupancyPattern[];
  trends: TrendAnalysis;
  predictions: Prediction[];
  optimization: OptimizationTip[];
}

3. MaintenanceReport {
  performance: PerformanceMetrics;
  issues: IssueAnalysis;
  costs: CostBreakdown;
  planning: MaintenancePlan[];
}
```

### 13. Implementation Notes

#### Technology Stack
- Three.js for 3D visualization
- D3.js for data visualization
- React/Vue.js for UI components
- CSS Grid/Flexbox for layouts
- WebGL for 3D rendering
- WebSocket for real-time updates

#### Best Practices
- Mobile-first development approach
- Progressive enhancement
- Performance monitoring
- Regular accessibility audits
- Cross-browser testing
- Touch device optimization

#### Component Development Guidelines
- Use TypeScript for type safety
- Implement Storybook for component documentation
- Follow atomic design principles
- Maintain consistent prop naming
- Include comprehensive test coverage
- Document accessibility considerations
