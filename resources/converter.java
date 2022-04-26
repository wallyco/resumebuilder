package javascriptconverter;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;


public class converter {
	public static void main(String[] a) throws IOException {
		File nfile = new File("mod.txt");
		File file = new File("unmodjs.txt");
		String variableName = "htmlDocString += \"";
		Scanner reader = new Scanner(file);
		FileWriter writer = new FileWriter(nfile);
		char prev = ' ';
		
		while(reader.hasNextLine()) {
			String data  = reader.nextLine().trim();
			for(char c : variableName.toCharArray()) {
				writer.write(c);
			}
			for(char c : data.toCharArray()) {
				if(c == '"' && prev != '`')
					writer.write('\\');
				if(c != '`')
					writer.write(c);
				prev = c;
			}
			writer.write("\\");
			writer.write('n');
			writer.write("\";", 0, 2);
			writer.write('\n');
			

		}
		
		writer.close();
		reader.close();
			
		}
	
	}
	

