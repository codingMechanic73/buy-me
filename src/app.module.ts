import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { SalesModule } from './sales/sales.module';
import { CatelogModule } from './catelog/catelog.module';
import { CustomerModule } from './customer/customer.module';
import { MarketingModule } from './marketing/marketing.module';
import { ContentModule } from './content/content.module';
import { ReportsModule } from './reports/reports.module';
import { StoreModule } from './store/store.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
      DashboardModule, 
        SalesModule, 
        CatelogModule, 
        CustomerModule, 
        MarketingModule, 
        ContentModule, 
        ReportsModule, 
        StoreModule, 
        SettingsModule
    ]
})
export class AppModule {}
