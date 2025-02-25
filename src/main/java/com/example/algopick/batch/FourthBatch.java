//package com.example.algopick.batch;
//
//import com.example.algopick.entity.ProblemEntity;
//import com.example.algopick.repository.ProblemRepository;
//import java.io.IOException;
//import org.apache.poi.ss.usermodel.Row;
//import org.springframework.batch.core.Job;
//import org.springframework.batch.core.Step;
//import org.springframework.batch.core.job.builder.JobBuilder;
//import org.springframework.batch.core.repository.JobRepository;
//import org.springframework.batch.core.step.builder.StepBuilder;
//import org.springframework.batch.item.ItemProcessor;
//import org.springframework.batch.item.ItemStreamReader;
//import org.springframework.batch.item.data.RepositoryItemWriter;
//import org.springframework.batch.item.data.builder.RepositoryItemWriterBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.transaction.PlatformTransactionManager;
//
//@Configuration
//public class FourthBatch {
//
//    private final JobRepository jobRepository;
//    private final PlatformTransactionManager platformTransactionManager;
//    private final ProblemRepository problemRepository;
//
//    public FourthBatch(JobRepository jobRepository, PlatformTransactionManager platformTransactionManager,
//                       ProblemRepository problemRepository) {
//        this.jobRepository = jobRepository;
//        this.platformTransactionManager = platformTransactionManager;
//        this.problemRepository = problemRepository;
//    }
//
//    @Bean
//    public Job fourthJob(){
//        System.out.println("fourth job");
//
//        return new JobBuilder("fourthJob", jobRepository)
//                .start(fourthStep())
//                .build();
//    }
//
//    @Bean
//    public Step fourthStep(){
//        return new StepBuilder("fourthStep", jobRepository)
//                .<Row, ProblemEntity> chunk(10, platformTransactionManager)
//                .reader(excelReader())
//                .processor(fourthProcessor())
//                .writer(fourthAfterWriter())
//                .build();
//    }
//
//    @Bean
//    public ItemStreamReader<Row> excelReader(){
//        try {
//            return new ExcelRowReader("src/main/resources/file/algolist.xlsx");
//        }catch (IOException e){
//            throw new RuntimeException(e);
//        }
//    }
//
//    @Bean
//    public ItemProcessor<Row, ProblemEntity> fourthProcessor() {
//        return new ItemProcessor<Row, ProblemEntity>() {
//            @Override
//            public ProblemEntity process(Row item) {
//                ProblemEntity problemEntity = new ProblemEntity();
//                problemEntity.setId((int) item.getCell(0).getNumericCellValue());
//                problemEntity.setCategory(item.getCell(1).getStringCellValue());
//                problemEntity.setRetry(item.getCell(2).getBooleanCellValue());
//                problemEntity.setSolved(item.getCell(3).getBooleanCellValue());
//
//                return problemEntity;
//            }
//        };
//    }
//
//    @Bean
//    public RepositoryItemWriter<ProblemEntity> fourthAfterWriter(){
//        return new RepositoryItemWriterBuilder<ProblemEntity>()
//                .repository(problemRepository)
//                .methodName("save")
//                .build();
//    }
//}
