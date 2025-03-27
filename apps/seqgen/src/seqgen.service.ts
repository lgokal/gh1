// tracking-number.service.ts
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class SeqgenService {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) { }

  async generateTrackingNumberWithPrefix(clientPrefix: string, destnCtry: string="CL", crossBorderType: string="1", prefix: string = "SH", sameReq:boolean=false): Promise<string> {
    //const prefix = parseInt(clientPrefix, 10); // Assuming clientPrefix is a string like '10'
    //const multiplier = Math.pow(10, 9 - clientPrefix.length); // Adjust multiplier based on prefix length and total digits
    const sequenceName = `client_${clientPrefix.toLowerCase()}_${destnCtry.toLowerCase()}_sequence`; // Create a sequence name based on the prefix

    try {
      //let sameReq = false;
      let result;
      if(sameReq){
        //return "";
        result = await this.entityManager.query(
          //$1 * $2 + nextval($3)
          `SELECT last_value AS tracking_number FROM ${sequenceName}`
          // [prefix, multiplier, sequenceName],
        );
      }else{
        result = await this.entityManager.query(
          //$1 * $2 + nextval($3)
          `SELECT nextval($1) AS tracking_number`, [sequenceName]
          // [prefix, multiplier, sequenceName],
        );
      }

      if (result && result[0] && result[0].tracking_number) {
        // pad the generated sequence to 9 digits
        const seqNum = result[0].tracking_number.padStart(9,0).toString();
        const shtn = `${prefix}${crossBorderType}${clientPrefix}${seqNum}${destnCtry}`;
        return shtn;
      }

      return "TBD"; // Handle potential errors
    } catch (error) {
      console.error('Error generating tracking number:', error);
      throw error; // Or handle the error as appropriate for your application
    }
  }

  // You would still need to ensure the sequences are created in your PostgreSQL database.
}